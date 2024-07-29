import React from "react";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils";
 
const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"});

import "@/styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: 'T.C. İstanbul Yeni Yüzyıl Üniversitesi',
  description: 'nisantasi üniversitesi',
  authors: [{name: 'Misy', url: 'https://misy.dev'}],
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          </ThemeProvider>

      </body>
    </html>
  )
}