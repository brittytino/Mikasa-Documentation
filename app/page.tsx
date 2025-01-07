import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] py-2">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Welcome to NYRA Documentation
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-muted-foreground">
        Explore the comprehensive documentation for the NYRA framework. Get started with our guides, tutorials, and API references.
      </p>
      <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <Link href="/docs/introduction">Get Started</Link>
      </Button>
    </div>
  )
}

