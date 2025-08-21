import type React from "react"
import type { Metadata } from "next"
import { Manrope, Quantico } from "next/font/google"
import "./globals.css"

const quantico = Quantico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quantico",
  weight: ['400', '700'],
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "CustomsLens - Streamline Customs Clearance in the Netherlands",
  description:
    "AI-powered customs clearance platform for Dutch brokers, forwarders, and importers. Automate DV/BFV processing, streamline customs requests, and ensure 100% compliance.",
  keywords: "customs clearance, Netherlands customs, DV BFV automation, Dutch customs broker, Rotterdam port, customs software",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${quantico.variable} ${manrope.variable} antialiased`}>
      <body className="font-manrope">{children}</body>
    </html>
  )
}
