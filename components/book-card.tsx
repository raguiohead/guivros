"use client"

import Image from "next/image"
import Link from "next/link"
import type { Book, BookCondition } from "@/lib/books"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const conditionColor: Record<BookCondition, string> = {
    "Conservado": "bg-green-600 text-white dark:bg-green-700 dark:text-white",
    "Bom estado": "bg-amber-500 text-white dark:bg-amber-600 dark:text-white",
    "Antigo": "bg-stone-500 text-white dark:bg-stone-600 dark:text-white"
  }

  return (
    <Link href={`/livro/${book.id}`}>
      <article className="group flex flex-col bg-card rounded-lg border border-border overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-muted-foreground/20 h-full">
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted">
          <Image
            src={book.images[0]}
            alt={`Capa do livro ${book.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <span className={`absolute top-2 left-2 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${conditionColor[book.condition]}`}>
            {book.condition}
          </span>
          {book.images.length > 1 && (
            <span className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-muted-foreground border border-border">
              +{book.images.length - 1} fotos
            </span>
          )}
        </div>
        
        <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2 sm:gap-3">
          <div className="flex-1 space-y-0.5 sm:space-y-1">
            <h3 className="font-serif text-sm sm:text-base leading-tight text-foreground line-clamp-2 text-balance">
              {book.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
              {book.author}
            </p>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <span className="text-base sm:text-lg font-medium text-foreground">
              {formatPrice(book.price)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
