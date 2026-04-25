import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Feito com <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> por{" "}
            <a 
              href="https://instagram.com/raguiohead" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline underline-offset-2"
            >
              @raguiohead
            </a>
          </p>
          <p className="text-xs text-muted-foreground/70">
            Todos os livros são únicos. Entre em contato para verificar disponibilidade.
          </p>
        </div>
      </div>
    </footer>
  )
}
