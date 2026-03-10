import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

/** Pragmatica Book — основной шрифт */
export const fontSans = localFont({
  src: [
    { path: '../../public/fonts/Pragmatica/pragmatica_book.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-sans',
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-mono',
})

/** Pragmatica Extended — для заголовков и акцентов */
export const fontExtended = localFont({
  src: [
    { path: '../../public/fonts/Pragmatica/pragmatica_extended-book.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Pragmatica/pragmatica_extended-oblique.woff2', weight: '400', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-extended',
})
