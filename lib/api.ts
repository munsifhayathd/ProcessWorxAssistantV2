interface ChatResponse {
  response: string;
  error?: string;
}

interface MessageContent {
  text: {
    value: string;
  };
}

interface Message {
  role: 'user' | 'assistant';
  content: MessageContent[];
}

interface APIResponse {
  body: string[];
  statusCode: number;
}

const API_URL = 'https://api.demo.processworxpal.bsdl.xyz';

const headers = {
  'Content-Type': 'application/json',
};

function formatResponse(text: string | null | undefined): string {
  if (!text) return "No response received";
  
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/#{1,6}\s/g, '')
    .replace(/\n\s*[-*+]\s+/g, '\n• ')
    .replace(/(\d+)\.\s+/g, '\n$1. ')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line)
    .join('\n\n');
}

export async function sendMessage(message: string): Promise<ChatResponse> {
  try {
    console.log('Sending request with message:', message);
    
    const response = await fetch(`${API_URL}/run_assistant`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        message: message
      })
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData);
      throw new Error(errorData.error || 'Failed to get response');
    }

    const data: APIResponse = await response.json();
    console.log('API Response:', data);

    // Extract the assistant's response from the body array
    const assistantMessage = data.body.find(msg => msg.startsWith('assistant:'));
    
    if (!assistantMessage) {
      console.error('Could not find assistant message in:', data);
      throw new Error('No assistant response found');
    }

    // Remove the 'assistant:' prefix and trim
    const responseText = assistantMessage.replace('assistant:', '').trim();

    return {
      response: formatResponse(responseText)
    };
  } catch (error) {
    console.error('Error in sendMessage:', error);
    return {
      response: "I apologize, but I'm having trouble processing your request right now. Please try again later.",
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
} 