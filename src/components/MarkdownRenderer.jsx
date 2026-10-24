import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs";

// Common languages for syntax highlighting
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";
import "prismjs/components/prism-yaml";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function CodeBlockContainer({ children }) {
  const [copied, setCopied] = useState(false);

  // In react-markdown, <pre> receives a single <code> child
  const codeProps = children?.props || {};
  const className = codeProps.className || "";
  const match = /language-(\w+)/.exec(className);
  const rawLang = match ? match[1].toLowerCase() : "";
  const rawCode = String(codeProps.children || "").replace(/\n$/, "");

  // Normalize language aliases
  const langAliases = {
    py: "python",
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    shell: "bash",
    yml: "yaml",
    html: "markup",
    xml: "markup",
  };
  const lang = langAliases[rawLang] || rawLang || "text";

  const highlightedHtml = useMemo(() => {
    if (!rawCode) return "";
    const grammar = Prism.languages[lang];
    if (grammar) {
      try {
        return Prism.highlight(rawCode, grammar, lang);
      } catch {
        return escapeHtml(rawCode);
      }
    }
    return escapeHtml(rawCode);
  }, [rawCode, lang]);

  const handleCopy = () => {
    if (!rawCode) return;
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-block-lang">{rawLang || "CODE"}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-code-btn"
          aria-label="Copy code to clipboard"
        >
          {copied ? <Check size={12} className="text-accent" /> : <Copy size={12} />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <pre className="code-block-pre">
        <code
          className={className || `language-${lang}`}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </pre>
    </div>
  );
}

function InlineCode({ children, className, ...props }) {
  // If className has a language, it might be an un-nested code block
  if (className && className.includes("language-")) {
    return <code className={className} {...props}>{children}</code>;
  }
  return (
    <code className="inline-code" {...props}>
      {children}
    </code>
  );
}

function SafeLink({ href, children, ...props }) {
  const isSafe = href && /^(https?:|mailto:|\/|#)/i.test(href.trim());
  if (!isSafe) {
    return <span>{children}</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="markdown-link"
      {...props}
    >
      {children}
    </a>
  );
}

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: CodeBlockContainer,
          code: InlineCode,
          a: SafeLink,
          table: ({ node, ...props }) => (
            <div className="table-wrapper">
              <table className="markdown-table" {...props} />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
