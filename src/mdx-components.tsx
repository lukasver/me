import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.debug('🚀 ~ components:', components);
  return {
    ...components,
  };
}
