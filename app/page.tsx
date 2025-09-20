import ChatInterface from "@/components/blocks/chat";
import { Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl text-black font-bold">Sendesk</h1>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
