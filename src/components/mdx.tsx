// @ts-nocheck
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import React from 'react';

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

// sugar-high only understands JS-like grammars, so other fenced languages
// (toml, bash, ...) and inline code render as plain text.
const HIGHLIGHTED_LANGUAGES = new Set([
  'js',
  'jsx',
  'javascript',
  'ts',
  'tsx',
  'typescript',
  'json',
]);

function Code({ children, className, ...props }) {
  const language = /language-(\w+)/.exec(className ?? '')?.[1];
  if (
    !language ||
    !HIGHLIGHTED_LANGUAGES.has(language) ||
    typeof children !== 'string'
  ) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
  const codeHTML = highlight(children);
  return (
    <code
      className={className}
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}

function Pre(props) {
  return (
    <pre
      {...props}
      className='rounded-lg border border-input bg-muted/50 text-foreground dark:bg-input/30'
    />
  );
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
    const slug = slugify(children);
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
  code: Code,
  pre: Pre,
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
