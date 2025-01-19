import Prism from 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'

import React, { useEffect, useRef } from 'react'

interface CodeSnippetProps {
  code: string
  language: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <pre
        className={`language-${language}`}
        style={{
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          overflowX: 'auto',
          maxWidth: '100%',
          boxSizing: 'border-box',
          padding: '1rem',
          fontSize: '1rem',
        }}
      >
        <code
          style={{
            display: 'block',
            fontFamily: "'Courier New', Courier, monospace",
            lineHeight: '1.5',
          }}
        >
          {code}
        </code>
      </pre>
      <style>
        {`
          @media (max-width: 768px) {
            pre {
              padding: 0.75rem;
              font-size: 0.9rem;
            }
            code {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 480px) {
            pre {
              padding: 0.5rem;
              font-size: 0.8rem;
            }
            code {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  )
}

export default CodeSnippet
