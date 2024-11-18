"use client"

import { useState } from 'react'
import { ChatInput } from './chat-input'
import { ChatMessages } from './chat-messages'
import { StarterQuestions } from './starter-questions'
import { sendMessage } from '@/lib/api'
import { Bot } from 'lucide-react'

export function ChatInterface() {
  const [messages, setMessages] = useState<Array<{
    role: 'user' | 'assistant'
    content: string
  }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSendMessage = async (message: string) => {
    setIsLoading(true)
    setError(null)
    
    setMessages(prev => [...prev, { role: 'user', content: message }])
    
    try {
      const response = await sendMessage(message)
      
      if (response.error) {
        setError(response.error)
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response.response 
      }])
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('Error in handleSendMessage:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <header className="border-b-2 border-indigo-100 bg-white/80 backdrop-blur-sm py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-center items-center">
          <div className="flex items-center gap-3 bg-indigo-50 px-6 py-2 rounded-full shadow-sm">
            <Bot className="w-6 h-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-indigo-900">
              ProcessWorx Pal
            </h1>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="mb-4 p-4 rounded-2xl bg-red-50 border-2 border-red-200 text-red-600">
              {error}
            </div>
          )}
          <ChatMessages messages={messages} isLoading={isLoading} />
          {messages.length === 0 && <StarterQuestions onQuestionSelect={handleSendMessage} />}
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  )
} 