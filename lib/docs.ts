import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(docsDirectory, `${realSlug}.md`)

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return { slug: realSlug, frontmatter: data, content }
  } catch (error) {
    console.error(`Error reading file: ${fullPath}`, error)
    return null
  }
}

export function getAllDocs() {
  const slugs = getAllDocSlugs()
  const docs = slugs.map((slug) => getDocBySlug(slug))
  return docs.filter((doc): doc is NonNullable<typeof doc> => doc !== null)
}

function getAllDocSlugs() {
  return getAllFiles(docsDirectory).map(file => 
    file.slice(docsDirectory.length + 1).replace(/\.md$/, '').replace(/\\/g, '/')
  )
}

function getAllFiles(dir: string): string[] {
  const files = fs.readdirSync(dir)
  let result: string[] = []

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      result = result.concat(getAllFiles(filePath))
    } else if (stat.isFile() && file.endsWith('.md')) {
      result.push(filePath)
    }
  })

  return result
}

