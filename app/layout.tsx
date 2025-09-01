import type React from "react"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}