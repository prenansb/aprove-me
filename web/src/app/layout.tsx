import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ClientReactQueryProvider } from '@/providers/react-query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aprove-me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="h-full" lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <ClientReactQueryProvider>{children}</ClientReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
