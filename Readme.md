### React Vite Shadcn Tailwind
- https://ui.shadcn.com/docs/installation/vite
- pnpm create vite@latest .
  - Typescript
  - (React Router)
- pnpm install
- pnpm add tailwindcss @tailwindcss/vite
- src/index.css
```css
@import "tailwindcss";
```
- tsconfig.json
```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
- tsconfig.app.json
```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```
- pnpm add -D @types/node
- vite.config.ts
```ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
- pnpm dlx shadcn@latest init
- pnpm dlx shadcn@latest add --all
- src/App.tsx
```ts
import { Button } from "@/components/ui/button"
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
export default App
```