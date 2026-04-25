import Link from "next/link"
import { BookX } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
            <BookX className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-2xl text-foreground mb-2">
            Livro não encontrado
          </h1>
          <p className="text-muted-foreground mb-6 max-w-sm">
            Este livro pode já ter encontrado um novo dono ou o link está incorreto.
          </p>
          <Button asChild>
            <Link href="/">
              Voltar para a vitrine
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
