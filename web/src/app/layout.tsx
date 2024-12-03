import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ClientReactQueryProvider } from '@/providers/react-query-provider'
import { Toaster } from 'sonner'

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
        <ClientReactQueryProvider>
          {children}
          <Toaster richColors className={`${inter.className}`} />
        </ClientReactQueryProvider>
      </body>
    </html>
  )
}
