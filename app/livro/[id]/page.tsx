import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { books } from "@/lib/books"
import { getBookById } from "@/lib/books"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookGallery } from "@/components/book-gallery"
import { WhatsAppButton } from "@/components/whatsapp-button"

interface BookPageProps {
  params: Promise<{ id: string }>
}

function renderInlineLinks(text: string) {
  const linkRegex = /<a\s+href=['\"]([^'\"]+)['\"][^>]*>(.*?)<\/a>/gi
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, href, label] = match
    const startIndex = match.index

    if (startIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, startIndex))
    }

    nodes.push(
      <a
        key={`${href}-${startIndex}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:opacity-80"
      >
        {label}
      </a>
    )

    lastIndex = startIndex + fullMatch.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

function renderDescription(description: string) {
  return description.split("\n").map((line, index) => (
    <p key={index}>
      {renderInlineLinks(line)}
    </p>
  ))
}

export async function generateStaticParams() {
  return books.map(book => ({
    id: book.id.toString()
  }))
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params
  const book = getBookById(Number(id))

  if (!book) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const conditionColor = {
    "Conservado": "bg-green-600 text-white dark:bg-green-700 dark:text-white",
    "Bom estado": "bg-amber-500 text-white dark:bg-amber-600 dark:text-white",
    "Antigo": "bg-stone-500 text-white dark:bg-stone-600 dark:text-white"
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
        {/* Back button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a vitrine
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Image Gallery */}
          <BookGallery title={book.title} images={book.images} />

          {/* Book Details */}
          <div className="flex flex-col">
            <span className={`self-start text-xs px-2.5 py-1 rounded-full mb-3 ${conditionColor[book.condition]}`}>
              {book.condition}
            </span>

            <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-1 text-balance">
              {book.title}
            </h1>
            
            <p className="text-muted-foreground mb-4">
              {book.author}
            </p>

            <p className="text-3xl font-medium text-foreground mb-6">
              {formatPrice(book.price)}
            </p>

            <div className="space-y-4 mb-8">
              <h2 className="text-sm font-medium text-foreground">Sobre este exemplar</h2>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                {renderDescription(book.description)}
              </div>
            </div>

            <WhatsAppButton title={book.title} price={formatPrice(book.price)} />

            <p className="text-xs text-muted-foreground text-center mt-3">
              Você será redirecionado para o WhatsApp
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
