import type React from "react"
import type { Metadata } from "next"
import { Inter, Pixelify_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify",
})

export const metadata: Metadata = {
  title: "Mobile Games Portfolio | Game Studio",
  description: "Explore our collection of innovative mobile games",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.className} ${_pixelifySans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
