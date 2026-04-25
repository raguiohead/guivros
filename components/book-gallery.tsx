"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BookGalleryProps {
  title: string
  images: string[]
}

export function BookGallery({ title, images }: BookGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={images[currentImageIndex]}
          alt={`${title} - Imagem ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Navigation arrows */}
        {images.length > 1 && (
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
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs text-foreground">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((image, index) => (
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
                alt={`${title} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
