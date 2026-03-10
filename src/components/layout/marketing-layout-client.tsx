'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { ChatWidget } from '@/components/chat/chat-widget'

interface MarketingLayoutClientProps {
  children: ReactNode
}

export function MarketingLayoutClient({ children }: MarketingLayoutClientProps) {
  const pathname = usePathname()
  const isHome = pathname === '/' || /^\/[a-z]{2}\/?$/.test(pathname)

  return (
    <>
      {!isHome && <Header />}
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  )
}
