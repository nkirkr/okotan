import { Inter, JetBrains_Mono, Archivo } from 'next/font/google'

export const fontSans = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans',
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-mono',
})

/** Display font for hero headings (Pragmatica Extended alternative) */
export const fontExtended = Archivo({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-extended',
})
