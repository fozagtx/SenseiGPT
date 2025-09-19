export const maxDuration = 30;

interface SensayMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface SensayRequest {
  messages: SensayMessage[];
}

interface SensayResponse {
  success: boolean;
  content?: string;
  response?: string;
  message?: string;
  error?: string;
  conversation_id?: string;
  replica_id?: string;
}

export async function POST(req: Request) {
  try {
    const { messages }: SensayRequest = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Extract the latest user message content
    const userMessage = messages.filter((msg) => msg.role === "user").pop();
    const systemMessage = messages.filter((msg) => msg.role === "system").pop();

    if (!userMessage?.content) {
      return new Response(
        JSON.stringify({ error: "User message content is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Sensay API configuration from environment
    const organizationSecret = process.env.SENSAY_ORGANIZATION_SECRET;
    const userId = process.env.SENSAY_USER_ID;
    const replicaId =
      process.env.SENSAY_REPLICA_ID || "3600fb46-c5d0-4449-b765-e913c87074ef";
    const baseUrl = process.env.SENSAY_BASE_URL || "https://api.sensay.io";

    // Validate required environment variables
    if (!organizationSecret) {
      console.error("Missing SENSAY_ORGANIZATION_SECRET");
      return new Response(
        JSON.stringify({
          error: "Server configuration error: Missing organization secret",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!userId) {
      console.error("Missing SENSAY_USER_ID");
      return new Response(
        JSON.stringify({
          error: "Server configuration error: Missing user ID",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    // Prepare content with context if system message exists
    let content = userMessage.content;
    if (systemMessage?.content) {
      content = `System: ${systemMessage.content}\n\nUser: ${content}`;
    }

    // Sensay API endpoint for chat completions
    const sensayUrl = `${baseUrl}/v1/replicas/${replicaId}/chat/completions`;

    // Sensay API headers as per documentation
    const sensayHeaders = {
      "Content-Type": "application/json",
      "X-ORGANIZATION-SECRET": organizationSecret,
      "X-USER-ID": userId,
      "X-API-Version": "2025-03-25", // Using the documented API version
      Accept: "application/json",
    };

    // Sensay API request body
    const sensayBody = {
      content: content,
      skip_chat_history: false, // Enable conversation continuity
    };

    console.log(`[Sensay API] Calling: ${sensayUrl}`);
    console.log(`[Sensay API] User ID: ${userId}`);
    console.log(`[Sensay API] Replica ID: ${replicaId}`);
    console.log(`[Sensay API] Content: "${content}"`);

    // Call Sensay API
    const startTime = Date.now();
    const response = await fetch(sensayUrl, {
      method: "POST",
      headers: sensayHeaders,
      body: JSON.stringify(sensayBody),
    });
    const duration = Date.now() - startTime;

    console.log(
      `[Sensay API] Response: ${response.status} ${response.statusText} (${duration}ms)`,
    );

    // Handle HTTP errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `[Sensay API] HTTP Error: ${response.status} ${response.statusText}`,
        errorText,
      );

      // Return appropriate error message based on status code
      let errorMessage = "Customer support service is temporarily unavailable";
      if (response.status === 401 || response.status === 403) {
        errorMessage = "Authentication error - please try again later";
      } else if (response.status === 429) {
        errorMessage = "Service is busy - please try again in a moment";
      } else if (response.status >= 500) {
        errorMessage = "Customer support service is experiencing issues";
      }

      return new Response(
        JSON.stringify({
          error: errorMessage,
          code: "SENSAY_API_ERROR",
          status: response.status,
        }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    // Parse response
    const sensayData: SensayResponse = await response.json();
    console.log(
      `[Sensay API] Success Response:`,
      JSON.stringify(sensayData, null, 2),
    );

    // Handle API-level errors
    if (!sensayData.success) {
      console.error(`[Sensay API] API Error:`, sensayData.error);
      return new Response(
        JSON.stringify({
          error: "Unable to process your request at this time",
          code: "SENSAY_PROCESSING_ERROR",
          details: sensayData.error,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    // Extract response content with fallback
    const responseContent =
      sensayData.content ||
      sensayData.response ||
      sensayData.message ||
      "I'm here to help! Could you please provide more details about how I can assist you?";

    // Return successful response
    return new Response(
      JSON.stringify({
        content: responseContent,
        conversation_id: sensayData.conversation_id,
        replica_id: sensayData.replica_id || replicaId,
        timestamp: new Date().toISOString(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "X-Response-Time": `${duration}ms`,
        },
      },
    );
  } catch (error) {
    console.error("[Chat API] Unexpected error:", error);

    // Handle different types of errors
    let errorMessage = "An unexpected error occurred";
    let errorCode = "INTERNAL_ERROR";

    if (error instanceof TypeError && error.message.includes("fetch")) {
      errorMessage = "Unable to connect to customer support service";
      errorCode = "NETWORK_ERROR";
    } else if (error instanceof SyntaxError) {
      errorMessage = "Invalid response from customer support service";
      errorCode = "PARSE_ERROR";
    }

    return new Response(
      JSON.stringify({
        error: errorMessage,
        code: errorCode,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
