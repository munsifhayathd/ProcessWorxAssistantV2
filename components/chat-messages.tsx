import { TypingIndicator } from './typing-indicator'

interface ChatMessagesProps {
  messages: Array<{
    role: 'user' | 'assistant'
    content: string
  }>
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl shadow-md transition-all duration-200 ${
            message.role === 'user'
              ? 'bg-indigo-600 ml-12 hover:bg-indigo-700'
              : 'bg-white mr-12 border-2 border-indigo-100 hover:border-indigo-200'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`text-sm font-bold ${
              message.role === 'user' ? 'text-white' : 'text-indigo-600'
            }`}>
              {message.role === 'user' ? 'You' : 'ProcessWorx Pal'}
            </div>
          </div>
          <div className={`${
            message.role === 'user' ? 'text-white' : 'text-gray-700'
          } font-medium whitespace-pre-line`}>
            {message.content}
          </div>
        </div>
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  )
} 