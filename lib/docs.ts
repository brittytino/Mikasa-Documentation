import path from 'path';

let fs: typeof import('fs') | undefined;
if (typeof window === 'undefined') {
  fs = require('fs');
}

function getAllFiles(dir: string): string[] {
  if (!fs) {
    throw new Error('fs module is not available on the client side');
  }

  const files = fs.readdirSync(dir);
  let result: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result = result.concat(getAllFiles(filePath));
    } else if (stat.isFile() && file.endsWith('.md')) {
      result.push(filePath);
    }
  });

  return result;
}

const docsDirectory = path.join(process.cwd(), 'docs');

export function getDocSlugs() {
  return getAllFiles(docsDirectory).map(file =>
    file.slice(docsDirectory.length + 1).replace(/\.md$/, '').replace(/\\/g, '/')
  );
}