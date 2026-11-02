import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const PRE_CLASS =
  'shiki rounded-lg border border-input bg-muted/50 text-foreground dark:bg-input/30';

const ALIASES: Record<string, string> = {
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  py: 'python',
  yml: 'yaml',
  md: 'markdown',
  js: 'javascript',
  ts: 'typescript',
};

let highlighter: Promise<HighlighterCore> | undefined;

function getHighlighter() {
  highlighter ??= createHighlighterCore({
    themes: [
      import('shiki/themes/github-light.mjs'),
      import('shiki/themes/github-dark.mjs'),
    ],
    langs: [
      import('shiki/langs/typescript.mjs'),
      import('shiki/langs/tsx.mjs'),
      import('shiki/langs/javascript.mjs'),
      import('shiki/langs/jsx.mjs'),
      import('shiki/langs/json.mjs'),
      import('shiki/langs/python.mjs'),
      import('shiki/langs/bash.mjs'),
      import('shiki/langs/toml.mjs'),
      import('shiki/langs/sql.mjs'),
      import('shiki/langs/yaml.mjs'),
      import('shiki/langs/diff.mjs'),
      import('shiki/langs/css.mjs'),
      import('shiki/langs/html.mjs'),
      import('shiki/langs/markdown.mjs'),
    ],
    engine: createJavaScriptRegexEngine(),
  });
  return highlighter;
}

/** Highlighted HTML for a fenced block, or null when the language is not loaded. */
export async function highlightCode(code: string, language: string) {
  const hl = await getHighlighter();
  const lang = ALIASES[language] ?? language;
  if (!hl.getLoadedLanguages().includes(lang)) return null;
  return hl.codeToHtml(code.replace(/\n$/, ''), {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: 'light',
    transformers: [
      {
        pre(node) {
          // Keep the site panel look instead of the theme background.
          delete node.properties.style;
          node.properties.class = PRE_CLASS;
        },
      },
    ],
  });
}
