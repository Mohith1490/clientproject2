// src/vite-env.d.ts
declare module '*.md' {
    const attributes: Record<string, any>
    const html: string
    export { attributes, html }
  }
  