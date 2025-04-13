import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GumroadRedirectHandler from "@/components/GumroadRedirectHandler"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Services - One Click Solutions",
  description: "AI-powered tools tailored for your business. Our experts handle everything.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense fallback={null}>
            <GumroadRedirectHandler />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}