import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mikasa AI Documentation - Next-Gen AI Framework",
  description: "Comprehensive documentation for Mikasa AI, the cutting-edge AI framework for blockchain and cryptocurrency applications.",
  keywords: "Mikasa AI, AI, blockchain, cryptocurrency, machine learning, smart contracts, decentralized finance",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.mikasa.ai',
    siteName: 'Mikasa AI Documentation',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mikasa AI - Next-Gen AI Framework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mikasa_ai',
    creator: '@mikasa_ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
            <Sidebar />
            <main className="relative py-6 lg:gap-10 lg:py-8">
              <div className="mx-auto w-full min-w-0">
                {children}
              </div>
            </main>
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

