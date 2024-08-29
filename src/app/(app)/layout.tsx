import React from 'react'
import './globals.scss'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Quan Ng',
  description: 'Web Designer & Developer',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" className="light" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
