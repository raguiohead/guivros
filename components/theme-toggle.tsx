"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark" | "system"

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme("system")
    }
    
    // Listen for storage changes if the accessibility menu updates it
    const handleStorageChange = () => {
      const current = localStorage.getItem("theme") as Theme | null
      if (current && current !== theme) {
        setTheme(current)
      }
    }
    
    // Simple interval fallback since 'storage' event only fires across different tabs
    const interval = setInterval(() => {
      const current = localStorage.getItem("theme") as Theme | null
      if (current && current !== theme) {
        setTheme(current)
      }
    }, 500)

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [theme])

  const handleThemeChange = () => {
    const root = document.documentElement
    
    // Determine what the current effective theme is
    let currentEffectiveTheme = theme
    if (theme === "system") {
      currentEffectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    const newTheme = currentEffectiveTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    root.classList.toggle("dark", newTheme === "dark")
  }

  // Determine effective theme for icon
  const isDark = theme === "dark" || (theme === "system" && mounted && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={handleThemeChange}
      className="rounded-full w-9 h-9"
      aria-label="Alternar tema claro/escuro"
    >
      {mounted ? (
        isDark ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )
      ) : (
        <span className="w-4 h-4 opacity-0" />
      )}
    </Button>
  )
}
