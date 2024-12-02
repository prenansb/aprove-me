import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { AuthProvider } from '@/providers/auth-provider'
import { ClientReactQueryProvider } from '@/providers/react-query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'aprove-me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
            <ClientReactQueryProvider>{children}</ClientReactQueryProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
