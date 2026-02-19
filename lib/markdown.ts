import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

export function getBlogPostContent(slug: string): string | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  
  try {
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, 'utf8');
    }
    return null;
  } catch (error) {
    console.error(`Error reading markdown file for slug ${slug}:`, error);
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}
