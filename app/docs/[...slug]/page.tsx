import { notFound } from 'next/navigation'
import { getDocBySlug } from '@/lib/docs'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

export default function DocPage({ params }: DocPageProps) {
  const slug = params?.slug?.join('/')
  const doc = getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">{doc.frontmatter.title || 'Untitled'}</h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-8">
        <h2 className="text-xl font-semibold mb-2">On this page</h2>
        <TableOfContents content={doc.content} />
      </div>
      <Markdown
        components={{
          h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mt-12 mb-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold mt-8 mb-3" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-2" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                className="rounded-md"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5" {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {doc.content}
      </Markdown>
    </article>
  )
}

function TableOfContents({ content }: { content: string }) {
  const headings = content.match(/^## (.+)$/gm) || []
  return (
    <ul className="list-none p-0">
      {headings.map((heading, index) => (
        <li key={index} className="mb-2">
          <a href={`#${heading.replace('## ', '').toLowerCase().replace(/\s/g, '-')}`} className="text-blue-500 hover:underline">
            {heading.replace('## ', '')}
          </a>
        </li>
      ))}
    </ul>
  )
}

