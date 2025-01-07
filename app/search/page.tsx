"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getAllDocs } from '@/lib/docs';

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      const allDocs = getAllDocs()
      const filteredDocs = allDocs.filter(doc => 
        doc.content.toLowerCase().includes(query.toLowerCase()) ||
        doc.frontmatter.title.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredDocs)
    }
  }, [query])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((doc, index) => (
            <li key={index} className="border-b pb-4">
              <Link href={`/docs/${doc.slug}`} className="text-xl font-semibold hover:underline">
                {doc.frontmatter.title}
              </Link>
              <p className="mt-2 text-gray-600">{doc.content.slice(0, 200)}...</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  )
}

