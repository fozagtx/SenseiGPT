import ChatInterface from "@/components/blocks/chat";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-3xl text-black font-bold">SenseiGPT</h1>
            <Link href="/knowledge">
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Base
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
