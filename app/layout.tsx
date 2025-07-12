import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SessionManager } from "@/components/admin/session-manager"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rebuild FCS Hall - FGCI Alumni Campaign",
  description:
    "Help rebuild the FCS Church Hall at Federal Government College, Ilorin. A sacred space that shaped generations of students needs our support.",
  keywords: "FGCI, Federal Government College Ilorin, FCS Hall, Alumni, Fundraising, Church Hall, Rebuild",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionManager />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
