"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  {
    title: "Introduction",
    href: "/docs/introduction",
  },
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start" },
      { title: "Configuration", href: "/docs/getting-started/configuration" },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "AI Integration", href: "/docs/core-concepts/ai-integration" },
      { title: "Blockchain Interaction", href: "/docs/core-concepts/blockchain-interaction" },
      { title: "Smart Contracts", href: "/docs/core-concepts/smart-contracts" },
    ]
  },
  {
    title: "Advanced Topics",
    items: [
      { title: "Custom AI Models", href: "/docs/advanced-topics/custom-ai-models" },
      { title: "Cross-chain Operations", href: "/docs/advanced-topics/cross-chain-operations" },
      { title: "Security Best Practices", href: "/docs/advanced-topics/security-best-practices" },
    ]
  },
  {
    title: "API Reference",
    href: "/docs/api-reference",
  },
  {
    title: "Tutorials",
    items: [
      { title: "Building a DeFi App", href: "/docs/tutorials/building-a-defi-app" },
      { title: "Creating an NFT Marketplace", href: "/docs/tutorials/creating-an-nft-marketplace" },
      { title: "Developing a Trading Bot", href: "/docs/tutorials/developing-a-trading-bot" },
    ]
  },
  {
    title: "Deployment",
    items: [
      { title: "Deploying to Mainnet", href: "/docs/deployment/deploying-to-mainnet" },
      { title: "Scaling Your Application", href: "/docs/deployment/scaling-your-application" },
    ]
  },
  {
    title: "Community and Support",
    items: [
      { title: "Contributing", href: "/docs/community/contributing" },
      { title: "FAQ", href: "/docs/community/faq" },
    ]
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)] py-6 pl-8 pr-6 lg:py-8">
      <div className="w-full">
        {sidebarItems.map((item, index) => (
          <div key={index} className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              {item.title}
            </h4>
            {item.items ? (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {item.items.map((subItem, subIndex) => (
                  <Button
                    key={subIndex}
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      pathname === subItem.href && "bg-muted font-medium text-foreground"
                    )}
                  >
                    <Link href={subItem.href}>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      {subItem.title}
                    </Link>
                  </Button>
                ))}
              </div>
            ) : (
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  pathname === item.href && "bg-muted font-medium text-foreground"
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

