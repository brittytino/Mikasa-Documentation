import Link from "next/link"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About NYRA</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              NYRA is a cutting-edge AI framework designed for blockchain and cryptocurrency applications, empowering developers to create intelligent decentralized solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/docs/introduction" className="text-sm text-blue-500 hover:underline">Getting Started</Link></li>
              <li><Link href="/docs/api-reference" className="text-sm text-blue-500 hover:underline">API Reference</Link></li>
              <li><Link href="/docs/tutorials" className="text-sm text-blue-500 hover:underline">Tutorials</Link></li>
              <li><Link href="/docs/faq" className="text-sm text-blue-500 hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/nyra" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">GitHub</a></li>
              <li><a href="https://discord.gg/nyra" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">Discord</a></li>
              <li><a href="https://twitter.com/nyra_ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">Twitter</a></li>
              <li><a href="https://nyra.blog" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Stay updated with our latest news and releases.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-3 py-2 text-sm rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 text-sm rounded-r-md hover:bg-blue-600 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

