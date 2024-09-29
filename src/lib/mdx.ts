import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const MetadataSchema = z.object({
  title: z.string(),
  publishedAt: z.string(),
  summary: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  authors: z.array(z.string()).optional(),
});

export type Metadata = z.infer<typeof MetadataSchema>;

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata = {} as Metadata;

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value: string | string[] | boolean = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes

    let trimmed = key.trim() as keyof Metadata;
    if (value?.startsWith("['") && value?.endsWith("']")) {
      value = JSON.parse(value.replaceAll("'", '"')) as string[]; // Parse JSON string to array
    } else if (value === 'true' || value === 'false') {
      value = value === 'true';
    }
    if (trimmed && value) {
      metadata[trimmed] = value as never;
    }
  });

  return { metadata: metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(
    path.join(process.cwd(), 'src', 'app', 'blog', 'posts')
  ).filter((post) => !post.metadata.draft);
}

export const getTags = (posts: ReturnType<typeof getBlogPosts>) => {
  const allTags = posts.map((post) => post.metadata.tags).flat();
  return Array.from(new Set(allTags)).filter(Boolean);
};

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
