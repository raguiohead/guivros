"use client"

import { Book } from "lucide-react"
import { AccessibilityMenu } from "./accessibility-menu"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          <h1 className="font-serif text-xl tracking-tight text-foreground">
            guivros e afins
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xs text-muted-foreground hidden sm:block">
            livros usados com carinho
          </p>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <AccessibilityMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
