import type { ReactNode } from 'react'
import { MarketingLayoutClient } from '@/components/layout/marketing-layout-client'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <MarketingLayoutClient>{children}</MarketingLayoutClient>
}
