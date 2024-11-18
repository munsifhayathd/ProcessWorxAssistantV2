import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="w-full max-w-3xl mx-auto text-center space-y-12 px-4">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-indigo-900 sm:text-6xl lg:text-7xl">
            Welcome to ProcessWorx Pal
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-600 max-w-2xl mx-auto">
            Your intelligent companion for answers and assistance. Ask anything and get
            helpful responses instantly.
          </p>
        </div>
        <Link href="/chat" className="inline-block">
          <Button 
            size="lg"
            className="shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
