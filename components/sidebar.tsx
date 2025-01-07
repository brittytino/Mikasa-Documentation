"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  {
    title: "SAY HELLO TO NYRA",
    href: "/docs/introduction",
  },
  {
    title: "Nyra Agent Overview",
    items: [
      { title: "🏆 Goal", href: "/docs/nyra-agent/goal" },
      { title: "📃 Key Concepts", href: "/docs/nyra-agent/key-concepts" },
      { title: "💻 Scenarios", href: "/docs/nyra-agent/scenarios" },
      { title: "Getting Started", href: "/docs/nyra-agent/getting-started" },
      { title: "Architecture", href: "/docs/nyra-agent/architecture" },
      { title: "Project Structure", href: "/docs/nyra-agent/project-structure" },
      { title: "Setup", href: "/docs/nyra-agent/setup" },
      { title: "Development Environment", href: "/docs/nyra-agent/development-environment" },
      { title: "Run Demo", href: "/docs/nyra-agent/run-demo" },
      { title: "Run Playground", href: "/docs/nyra-agent/run-playground" },
    ]
  },
  {
    title: "Customize Nyra Agent",
    items: [
      { title: "Create a Hello World Extension", href: "/docs/customize-nyra/hello-world-extension" },
      { title: "How does interrupt work in NYRA-Agent", href: "/docs/customize-nyra/interrupt" },
      { title: "Create an Extension with Predefined Type", href: "/docs/customize-nyra/predefined-type-extension" },
      { title: "FAQs", href: "/docs/customize-nyra/faqs" },
    ]
  },
  {
    title: "Nyra Framework Overview",
    items: [
      { title: "Development Process", href: "/docs/nyra-framework/development-process" },
      { title: "Preparation", href: "/docs/nyra-framework/preparation" },
      { title: "Addon System", href: "/docs/nyra-framework/addon-system" },
      { title: "Version System", href: "/docs/nyra-framework/version-system" },
      { title: "Metadata System", href: "/docs/nyra-framework/metadata-system" },
      { title: "Message System", href: "/docs/nyra-framework/message-system" },
      { title: "Type System", href: "/docs/nyra-framework/type-system" },
      { title: "Schema System", href: "/docs/nyra-framework/schema-system" },
      { title: "Build System", href: "/docs/nyra-framework/build-system" },
      { title: "Graph Cloud Store", href: "/docs/nyra-framework/graph-cloud-store" },
      { title: "Debugging", href: "/docs/nyra-framework/debugging" },
      { title: "Profiling", href: "/docs/nyra-framework/profiling" },
      { title: "Dependencies", href: "/docs/nyra-framework/dependencies" },
    ]
  },
  {
    title: "NYRA Testing System",
    items: [
      { title: "For Users of NYRA framework", href: "/docs/testing/for-users" },
      { title: "For Developers of TEN framework", href: "/docs/testing/for-developers" },
    ]
  },
  {
    title: "Binding Go API REFERENCE",
    items: [
      { title: "Required Interface", href: "/docs/go-api/required-interface" },
      { title: "Log", href: "/docs/go-api/log" },
    ]
  },
  {
    title: "NYRA PACKAGES Overview",
    items: [
      { title: "App Extension", href: "/docs/packages/app-extension" },
      { title: "Python Async Extension", href: "/docs/packages/python-async-extension" },
    ]
  },
  {
    title: "NYRA MANAGER Overview",
    items: [
      { title: "Designer", href: "/docs/manager/designer" },
      { title: "Check-Graph", href: "/docs/manager/check-graph" },
    ]
  },
  {
    title: "TUTORIALS",
    items: [
      { title: "How to run local AI model in Python extension", href: "/docs/tutorials/local-ai-model" },
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

