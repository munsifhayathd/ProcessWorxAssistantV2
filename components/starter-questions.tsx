"use client"

interface StarterQuestionsProps {
  onQuestionSelect: (question: string) => void
}

export function StarterQuestions({ onQuestionSelect }: StarterQuestionsProps) {
  const questions = [
    "What can ProcessWorx Pal help me with?",
    "How do I discipline an employee?",
    "What should I do with an underperforming employee?",
    "How can I make an employee redundant?",
    "How do I get started with ProcessWorx?",
    "How do I create a performance improvement plan?",
    "What are the legal requirements for employee leave?",
    "How do I conduct a fair recruitment process?",
  ]

  return (
    <div className="w-screen -ml-6 space-y-6 p-4">
      <div className="relative">
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex flex-col gap-4 px-4 min-w-max">
            <div className="flex gap-4">
              {questions.slice(0, Math.ceil(questions.length / 2)).map((question, index) => (
                <button
                  key={index}
                  onClick={() => onQuestionSelect(question)}
                  className="p-4 text-left rounded-2xl border-2 border-indigo-100 
                           hover:border-indigo-300 hover:bg-indigo-50 transition-all
                           shadow-md hover:shadow-lg flex-shrink-0 w-[500px] h-[90px]
                           flex items-center translate-x-[100px]"
                >
                  <span className="text-lg text-indigo-700 font-medium hover:text-indigo-900 transition-colors line-clamp-2">
                    {question}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              {questions.slice(Math.ceil(questions.length / 2)).map((question, index) => (
                <button
                  key={index}
                  onClick={() => onQuestionSelect(question)}
                  className="p-4 text-left rounded-2xl border-2 border-indigo-100 
                           hover:border-indigo-300 hover:bg-indigo-50 transition-all
                           shadow-md hover:shadow-lg flex-shrink-0 w-[500px] h-[90px]
                           flex items-center"
                >
                  <span className="text-lg text-indigo-700 font-medium hover:text-indigo-900 transition-colors line-clamp-2">
                    {question}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 