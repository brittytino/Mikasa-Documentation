import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Welcome to NYRA
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          The next-generation AI framework for blockchain and cryptocurrency applications. Harness the power of artificial intelligence in your decentralized projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
            <Link href="/docs/introduction">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/nyra/nyra-framework" target="_blank" rel="noopener noreferrer">View on GitHub</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-yellow-500" />}
            title="Lightning Fast"
            description="Optimized for speed and efficiency, NYRA delivers rapid results for your AI-powered blockchain applications."
          />
          <FeatureCard
            icon={<Code className="h-10 w-10 text-blue-500" />}
            title="Easy Integration"
            description="Seamlessly integrate NYRA into your existing projects with our comprehensive SDK and clear documentation."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-green-500" />}
            title="Secure by Design"
            description="Built with security in mind, NYRA ensures your AI models and blockchain data remain protected."
          />
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {icon}
      <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  )
}

