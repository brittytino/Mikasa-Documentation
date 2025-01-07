import React, { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  
  const handleSearch = (value: string) => {
    setQuery(value);
    // Simple search implementation - you can enhance this
    const searchResults = sidebar
      .flatMap(section => section.items)
      .filter(item => 
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      .map(item => item.title);
    setResults(value ? searchResults : []);
  };
  
  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search docs..."
        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {results.length > 0 && query && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg border">
          <ul className="py-1">
            {results.map((result, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const sidebar = [
  {
    section: "Introduction",
    items: [
      { title: "Goal", path: "/docs/goal" },
      { title: "Key Concepts", path: "/docs/key-concepts" },
      { title: "Scenarios", path: "/docs/scenarios" }
    ]
  },
  // ... rest of the sidebar structure
];