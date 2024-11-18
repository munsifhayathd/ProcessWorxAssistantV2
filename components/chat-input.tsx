"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SendHorizontal } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t-2 border-indigo-100 p-6 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center gap-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            placeholder="Ask ProcessWorx Pal anything..."
            className="resize-none min-h-[52px] py-3 px-4 rounded-2xl border-2 border-indigo-100 focus:border-indigo-300 shadow-md"
            disabled={disabled}
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
          />
        </div>
        <Button 
          type="submit" 
          disabled={disabled || !message.trim()}
          size="icon"
          className="h-[52px] w-[52px] rounded-2xl shadow-md"
        >
          <SendHorizontal className="h-6 w-6" />
        </Button>
      </div>
    </form>
  )
} 