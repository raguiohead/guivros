"use client"

import Image from "next/image"
import Link from "next/link"
import type { Thing, BookCondition, ThingStatus } from "@/lib/things"

interface ThingCardProps {
  thing: Thing
}

export function ThingCard({ thing }: ThingCardProps) {
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

  const status: ThingStatus = thing.status || "disponivel"
  const isSold = status === "vendido"
  const isReserved = status === "reservado"

  return (
    <Link href={`/livro/${thing.id}`} className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
      <article
        className={`flex flex-col bg-card rounded-lg border border-border overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-muted-foreground/30 h-full relative ${
          isSold ? "opacity-75" : ""
        }`}
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted">
          <Image
            src={thing.images[0]}
            alt={`Capa do item ${thing.title}`}
            fill
            className={`object-cover transition-transform duration-300 ${
              isSold ? "grayscale-[40%]" : "group-hover:scale-105"
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Tag de Condição */}
          <span
            className={`absolute top-2 left-2 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-xs ${conditionColor[thing.condition]}`}
          >
            {thing.condition}
          </span>

          {/* Badge de Status: Vendido ou Reservado */}
          {isSold && (
            <span className="absolute bottom-2 left-2 right-2 text-center text-[11px] sm:text-xs py-1 px-2 rounded-md bg-destructive text-destructive-foreground font-semibold shadow-md uppercase tracking-wider">
              Vendido
            </span>
          )}

          {isReserved && (
            <span className="absolute bottom-2 left-2 right-2 text-center text-[11px] sm:text-xs py-1 px-2 rounded-md bg-amber-500 text-white font-medium shadow-md uppercase tracking-wider">
              Reservado
            </span>
          )}

          {/* Contador de fotos extras */}
          {thing.images.length > 1 && (
            <span className="absolute top-2 right-2 bg-background/85 backdrop-blur-xs text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-foreground border border-border">
              +{thing.images.length - 1} fotos
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2 sm:gap-3">
          <div className="flex-1 space-y-0.5 sm:space-y-1">
            <h3 className="font-serif text-sm sm:text-base leading-tight text-foreground line-clamp-2 text-balance">
              {thing.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
              {thing.author}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/50">
            <span
              className={`text-base sm:text-lg font-medium ${
                isSold ? "text-muted-foreground line-through" : "text-foreground"
              }`}
            >
              {formatPrice(thing.price)}
            </span>

            {isSold && (
              <span className="text-[11px] font-semibold text-destructive uppercase tracking-wide">
                Indisponível
              </span>
            )}
            {isReserved && (
              <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                Fila de espera
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
