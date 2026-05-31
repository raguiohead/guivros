"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Type, Minus, Plus, RotateCcw } from "lucide-react"
import { AccessibilityIcon } from "./icons/accessibility-icon"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "system"
type FontSize = "normal" | "large" | "xlarge"

export function AccessibilityMenu() {
  const [theme, setTheme] = useState<Theme>("system")
  const [fontSize, setFontSize] = useState<FontSize>("normal")
  const [mounted, setMounted] = useState(false)

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    
    if (newTheme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", systemDark)
    } else {
      root.classList.toggle("dark", newTheme === "dark")
    }
  }

  const applyFontSize = (size: FontSize) => {
    const root = document.documentElement
    root.classList.remove("text-normal", "text-large", "text-xlarge")
    root.classList.add(`text-${size}`)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedFontSize = localStorage.getItem("fontSize") as FontSize | null
    
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      applyTheme("system")
    }
    
    if (savedFontSize) {
      setFontSize(savedFontSize)
      applyFontSize(savedFontSize)
    }
    
    setMounted(true)
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    applyFontSize(fontSize)
  }, [fontSize])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  const handleFontSizeChange = (size: FontSize) => {
    setFontSize(size)
    localStorage.setItem("fontSize", size)
    applyFontSize(size)
  }

  const increaseFontSize = () => {
    if (fontSize === "normal") handleFontSizeChange("large")
    else if (fontSize === "large") handleFontSizeChange("xlarge")
  }

  const decreaseFontSize = () => {
    if (fontSize === "xlarge") handleFontSizeChange("large")
    else if (fontSize === "large") handleFontSizeChange("normal")
  }

  const resetAccessibility = () => {
    handleThemeChange("system")
    handleFontSizeChange("normal")
  }

  if (!mounted) {
    return (
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full w-9 h-9"
        aria-label="Acessibilidade"
      >
        <AccessibilityIcon className="w-5 h-5" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-9 h-9"
          aria-label="Menu de acessibilidade"
        >
          <AccessibilityIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex items-center justify-between">
          Acessibilidade
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetAccessibility}
            className="h-7 px-2 text-xs"
            aria-label="Restaurar configurações padrão"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Restaurar
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Theme Toggle */}
        <div className="px-2 py-2">
          <p className="text-xs text-muted-foreground mb-2">Tema</p>
          <div className="flex gap-1">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              size="sm"
              onClick={() => handleThemeChange("light")}
              className="flex-1 h-8"
              aria-pressed={theme === "light"}
            >
              <Sun className="w-3.5 h-3.5 mr-1.5" />
              Claro
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "outline"}
              size="sm"
              onClick={() => handleThemeChange("dark")}
              className="flex-1 h-8"
              aria-pressed={theme === "dark"}
            >
              <Moon className="w-3.5 h-3.5 mr-1.5" />
              Escuro
            </Button>
          </div>
          <Button
            variant={theme === "system" ? "default" : "outline"}
            size="sm"
            onClick={() => handleThemeChange("system")}
            className="w-full mt-1 h-8"
            aria-pressed={theme === "system"}
          >
            Seguir sistema
          </Button>
        </div>
        
        <DropdownMenuSeparator />
        
        {/* Font Size */}
        <div className="px-2 py-2">
          <p className="text-xs text-muted-foreground mb-2">Tamanho da fonte</p>
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={decreaseFontSize}
              disabled={fontSize === "normal"}
              className="h-8 w-8"
              aria-label="Diminuir fonte"
            >
              <Minus className="w-3.5 h-3.5" />
            </Button>
            <div className="flex items-center gap-1.5 text-sm">
              <Type className="w-4 h-4" />
              <span className="min-w-[60px] text-center">
                {fontSize === "normal" && "Normal"}
                {fontSize === "large" && "Grande"}
                {fontSize === "xlarge" && "Muito grande"}
              </span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={increaseFontSize}
              disabled={fontSize === "xlarge"}
              className="h-8 w-8"
              aria-label="Aumentar fonte"
            >
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
