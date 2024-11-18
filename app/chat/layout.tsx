import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat | ProcessWorx Pal',
  description: 'Chat with ProcessWorx Pal',
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 