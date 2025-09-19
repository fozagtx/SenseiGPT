import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export interface SensayConfig {
  organizationSecret?: string;
  userId?: string;
  baseUrl?: string;
}

export function sensay(replicaId: string, config?: SensayConfig) {
  const organizationSecret =
    config?.organizationSecret ||
    process.env.SENSAY_ORGANIZATION_SECRET ||
    process.env.SENSAY_API_KEY;

  const userId = config?.userId || process.env.SENSAY_USER_ID;

  const baseUrl =
    config?.baseUrl || process.env.SENSAY_BASE_URL || "https://api.sensay.io";

  if (!organizationSecret) {
    throw new Error(
      "SENSAY_ORGANIZATION_SECRET environment variable is required",
    );
  }

  if (!userId) {
    throw new Error("SENSAY_USER_ID environment variable is required");
  }

  return createOpenAICompatible({
    name: "sensay",
    baseURL: baseUrl,
    apiKey: "not-used",
    fetch: async (url, options) => {
      // Transform OpenAI format to Sensay format
      const body = options?.body ? JSON.parse(options.body as string) : {};
      const messages = body.messages || [];

      // Extract content from messages
      const userMessage = messages.find((msg: any) => msg.role === "user");
      const systemMessage = messages.find((msg: any) => msg.role === "system");

      let content = userMessage?.content || "";
      if (systemMessage?.content) {
        content = `${systemMessage.content}\n\nUser: ${content}`;
      }

      // Build Sensay request
      const sensayUrl = `${baseUrl}/v1/replicas/${replicaId}/chat/completions`;

      const headers = options?.headers as Record<string, string> | undefined;
      const acceptHeader = headers?.["Accept"] || headers?.["accept"];
      const isStreaming = acceptHeader?.includes("text/event-stream");

      const sensayHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        "X-ORGANIZATION-SECRET": organizationSecret,
        "X-USER-ID": userId,
        "X-API-Version": "2025-03-25",
      };

      if (isStreaming) {
        sensayHeaders["Accept"] = "text/event-stream";
      } else {
        sensayHeaders["Accept"] = "application/json";
      }

      const sensayBody = {
        content: content,
        skip_chat_history: false,
      };

      const response = await fetch(sensayUrl, {
        method: "POST",
        headers: sensayHeaders,
        body: JSON.stringify(sensayBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Sensay API error: ${response.status} ${response.statusText} - ${errorText}`,
        );
      }

      // For streaming, Sensay already returns compatible format
      if (isStreaming) {
        return response;
      }

      // For non-streaming, transform to OpenAI format
      const sensayData = await response.json();

      console.log(
        "Sensay API Raw Response:",
        JSON.stringify(sensayData, null, 2),
      );

      if (!sensayData.success) {
        console.error("Sensay API Error:", sensayData);
        throw new Error(
          `Sensay API error: ${sensayData.error || "Unknown error"}`,
        );
      }

      const responseContent =
        sensayData.content || sensayData.response || sensayData.message || "";

      console.log("Extracted content:", responseContent);

      const openAIResponse = {
        choices: [
          {
            message: {
              content: responseContent,
              role: "assistant",
            },
            finish_reason: "stop",
          },
        ],
        usage: {
          prompt_tokens: Math.ceil(content.length / 4),
          completion_tokens: Math.ceil(responseContent.length / 4),
          total_tokens: Math.ceil(
            (content.length + responseContent.length) / 4,
          ),
        },
        model: `sensay:${replicaId}`,
        object: "chat.completion",
      };

      return new Response(JSON.stringify(openAIResponse), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  })("gpt-3.5-turbo");
}

export default sensay;
