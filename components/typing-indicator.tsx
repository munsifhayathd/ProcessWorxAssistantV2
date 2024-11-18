export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-3 p-6 mr-12 bg-white rounded-2xl border-2 border-indigo-100 shadow-md">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-3 h-3 bg-indigo-800 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
      <span className="text-sm font-bold text-indigo-600">
        ProcessWorx Pal is thinking...
      </span>
    </div>
  )
} 