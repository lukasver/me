// @ts-nocheck
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlightCode } from '@/lib/highlighter';
import React from 'react';
import remarkGfm from 'remark-gfm';

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
}

function Blockquote(props) {
  return (
    <blockquote
      {...props}
      className='not-italic font-normal text-foreground border-l-4 border-primary bg-primary/5 dark:bg-primary/15 rounded-r-md px-4 py-1 [&_p]:before:content-none [&_p]:after:content-none'
    />
  );
}

function RoundedImage(props) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

const PRE_CLASS =
  'rounded-lg border border-input bg-muted/50 text-foreground dark:bg-input/30';

// Fenced blocks are highlighted on the server with Shiki, so no highlighter
// code ships to the client. Inline code and unknown languages stay plain.
async function Pre({ children, ...props }) {
  const code = React.isValidElement(children) ? children.props : null;
  const language = /language-([\w+-]+)/.exec(code?.className ?? '')?.[1];
  if (language && typeof code.children === 'string') {
    const html = await highlightCode(code.children, language);
    if (html) {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
  }
  return (
    <pre {...props} className={PRE_CLASS}>
      {children}
    </pre>
  );
}

// Headings can contain inline code or links, so collect the plain text from
// the React children instead of stringifying elements ("[object Object]").
function getNodeText(node) {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join('');
  if (React.isValidElement(node)) return getNodeText(node.props.children);
  return '';
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    const slug = slugify(getNodeText(children));
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function GfmTable(props) {
  return (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:px-3 [&_th]:py-2 [&_th]:text-left" {...props} />
    </div>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  blockquote: Blockquote,
  pre: Pre,
  Table,
  table: GfmTable,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        ...props.options,
        mdxOptions: {
          ...props.options?.mdxOptions,
          remarkPlugins: [
            ...(props.options?.mdxOptions?.remarkPlugins || []),
            remarkGfm,
          ],
        },
      }}
    />
  );
}
