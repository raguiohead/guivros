import { Header } from "@/components/header"
import { BookGrid } from "@/components/book-grid"
import { Footer } from "@/components/footer"
import { books } from "@/lib/books"
import { BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <section className="mb-6 sm:mb-10 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted mb-3 sm:mb-4">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2 text-balance px-2">
            Livros que merecem uma nova história
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-md mx-auto px-2">
            Uma coleção pessoal de livros e outros objetos usados, esperando por novos leitores e donos.
          </p>
        </section>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 py-3 sm:py-4 border-y border-border">
          <div className="text-center">
            <span className="block text-base sm:text-xl font-medium text-foreground">{books.length}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">livros</span>
          </div>
          <div className="text-center border-x border-border">
            <span className="block text-base sm:text-xl font-medium text-foreground">Usados</span>
            <span className="block text-[10px] sm:text-xs text-muted-foreground leading-tight">e bem conservados</span>
          </div>
          <div className="text-center">
            <span className="block text-base sm:text-xl font-medium text-foreground">WhatsApp</span>
            <span className="block text-[10px] sm:text-xs text-muted-foreground leading-tight">com o dono</span>
          </div>
        </div>

        {/* Books Grid */}
        <BookGrid books={books} />
      </main>
      
      <Footer />
    </div>
  )
}
