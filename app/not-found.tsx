import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">Sorry, we couldn't find the page you're looking for.</p>
      <Button asChild>
        <Link href="/">
          Return to Home
        </Link>
      </Button>
    </div>
  )
}

