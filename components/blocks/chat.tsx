"use client";

import { useChat } from "@ai-sdk/react";
import { ArrowUp, Copy, Bot, User, Wrench, Brain, Code2 } from "lucide-react";
import React, { memo, forwardRef } from "react";
import {
  ChatContainerContent,
  ChatContainerRoot,
  type ChatContainerRootProps,
} from "@/components/ui/chat-container";
import { DotsLoader } from "@/components/ui/loader";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
} from "@/components/ui/message";
import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const MessageComponent = memo(
  ({ message, isLastMessage }: { message: any; isLastMessage: boolean }) => {
    const isAssistant = message?.role === "assistant";

    const getMessageContent = (msg: any) => {
      if (msg.content) return msg.content;
      if (msg.parts) {
        return msg.parts
          .filter((part: any) => part.type === "text")
          .map((part: any) => part.text)
          .join("");
      }
      return "";
    };

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    return (
      <Message
        className={cn(
          "mx-auto flex w-full max-w-3xl flex-col gap-2 px-2 md:px-10",
          isAssistant ? "items-start" : "items-end",
        )}
      >
        {isAssistant ? (
          <div className="group flex w-full flex-row gap-3">
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarFallback className="bg-blue-100 text-blue-600">
                <Bot size={16} />
              </AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-col gap-0 space-y-2">
              <MessageContent
                className="text-black prose w-full min-w-0 flex-1 rounded-lg bg-transparent p-0"
                markdown
              >
                {getMessageContent(message)}
              </MessageContent>

              <MessageActions
                className={cn(
                  "-ml-2.5 flex gap-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100",
                  isLastMessage && "opacity-100",
                )}
              >
                <MessageAction tooltip="Copy" delayDuration={100}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => copyToClipboard(getMessageContent(message))}
                  >
                    <Copy />
                  </Button>
                </MessageAction>
              </MessageActions>
            </div>
          </div>
        ) : (
          <div className="group flex w-full flex-row items-start gap-3 justify-end">
            <div className="flex w-full flex-col items-end gap-1">
              <MessageContent className="bg-muted text-primary max-w-[85%] rounded-3xl px-5 py-2.5 whitespace-pre-wrap sm:max-w-[75%]">
                {getMessageContent(message)}
              </MessageContent>
              <MessageActions
                className={cn(
                  "flex gap-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100",
                )}
              >
                <MessageAction tooltip="Copy" delayDuration={100}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => copyToClipboard(getMessageContent(message))}
                  >
                    <Copy />
                  </Button>
                </MessageAction>
              </MessageActions>
            </div>
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarFallback className="bg-gray-100 text-gray-600">
                <User size={16} />
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </Message>
    );
  },
);

MessageComponent.displayName = "MessageComponent";

const ThinkingIndicator = memo(() => {
  const [currentTool, setCurrentTool] = React.useState(0);
  const tools = [
    { icon: Brain, name: "Analyzing", color: "text-purple-600 bg-purple-100" },
    { icon: Code2, name: "Processing", color: "text-blue-600 bg-blue-100" },
    { icon: Wrench, name: "Generating", color: "text-green-600 bg-green-100" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [tools.length]);

  const Tool = tools[currentTool];

  return (
    <div className="flex items-center gap-3 animate-pulse">
      <div
        className={cn(
          "p-2 rounded-full transition-all duration-500",
          Tool.color,
        )}
      >
        <Tool.icon size={16} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-700">
          {Tool.name}...
        </span>
        <DotsLoader />
      </div>
    </div>
  );
});

ThinkingIndicator.displayName = "ThinkingIndicator";

const LoadingMessage = memo(() => (
  <Message className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-2 md:px-10">
    <div className="group flex w-full flex-row gap-3">
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className="bg-blue-100 text-blue-600">
          <Bot size={16} />
        </AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col gap-0 space-y-2">
        <div className="text-black prose w-full min-w-0 flex-1 rounded-lg bg-transparent p-0">
          <ThinkingIndicator />
        </div>
      </div>
    </div>
  </Message>
));

LoadingMessage.displayName = "LoadingMessage";

function ChatInterface() {
  const [messages, setMessages] = React.useState<any[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const onSubmit = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.content || "Sorry, Sendesk couldn't process your request at this time.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: Date.now() + 2,
        role: "assistant",
        content:
          "Sorry, Sendesk encountered an error processing your message. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[600px] max-h-[80vh] flex-col">
      <ChatContainerRoot
        className="relative flex-1 space-y-0 overflow-y-auto"
      >
        <ChatContainerContent className="space-y-12 px-4 py-12">
          {messages?.map((message, index) => {
            const isLastMessage = index === messages.length - 1;
            return (
              <MessageComponent
                key={message.id}
                message={message}
                isLastMessage={isLastMessage}
              />
            );
          })}

          {isLoading && <LoadingMessage />}
          <div ref={messagesEndRef} />
        </ChatContainerContent>
      </ChatContainerRoot>

      <div className="mx-auto w-full max-w-3xl shrink-0 px-3 pb-3 md:px-5 md:pb-5">
        <PromptInput
          isLoading={isLoading}
          value={input}
          onValueChange={setInput}
          onSubmit={onSubmit}
          className="border-input bg-popover relative z-10 w-full rounded-3xl border p-0 pt-1 shadow-xs"
        >
          <div className="flex flex-col">
            <PromptInputTextarea
              placeholder="How can Sendesk help you today?"
              className="min-h-[44px] pt-3 pl-4 text-base leading-[1.3] sm:text-base md:text-base"
            />

            <PromptInputActions className="mt-3 flex w-full items-center justify-between gap-2 p-2">
              <div />
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  onClick={onSubmit}
                  className="size-9 rounded-full"
                >
                  <ArrowUp size={18} />
                </Button>
              </div>
            </PromptInputActions>
          </div>
        </PromptInput>
      </div>
    </div>
  );
}

export default ChatInterface;
