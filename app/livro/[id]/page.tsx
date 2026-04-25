"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { getBookById } from "@/lib/books"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

interface BookPageProps {
  params: Promise<{ id: string }>
}

export default function BookPage({ params }: BookPageProps) {
  const { id } = use(params)
  const book = getBookById(Number(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!book) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "5585998125976"
    const message = `Olá! Tenho interesse no livro "${book.title}" por ${formatPrice(book.price)} que vi no site guivros e afins.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === book.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? book.images.length - 1 : prev - 1
    )
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
          <div className="space-y-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={book.images[currentImageIndex]}
                alt={`${book.title} - Imagem ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Navigation arrows */}
              {book.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:bg-background transition-colors"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:bg-background transition-colors"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              {book.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs text-foreground">
                  {currentImageIndex + 1} / {book.images.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {book.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {book.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? "border-foreground" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                    aria-current={index === currentImageIndex}
                  >
                    <Image
                      src={image}
                      alt={`${book.title} - Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Entrar em contato
            </Button>

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
