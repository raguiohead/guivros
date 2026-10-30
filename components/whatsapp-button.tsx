"use client"

import { MessageCircle, Ban, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ThingStatus } from "@/lib/things"

interface WhatsAppButtonProps {
  title: string
  price: string
  status?: ThingStatus
}

export function WhatsAppButton({ title, price, status = "disponivel" }: WhatsAppButtonProps) {
  const isSold = status === "vendido"
  const isReserved = status === "reservado"

  const handleWhatsAppClick = () => {
    if (isSold) return
    const phoneNumber = "5585998125976"
    const message = isReserved
      ? `Olá! Vi no site guivros que o livro/objeto "${title}" (${price}) está reservado. Caso o comprador desista, tenho interesse!`
      : `Olá! Tenho interesse no livro/objeto "${title}" por ${price} que vi no site guivros e afins.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  if (isSold) {
    return (
      <Button
        disabled
        size="lg"
        variant="outline"
        className="w-full gap-2 cursor-not-allowed opacity-60"
        aria-label="Item já vendido e indisponível para compra"
      >
        <Ban className="w-5 h-5 text-destructive" />
        Item indisponível (Já vendido)
      </Button>
    )
  }

  if (isReserved) {
    return (
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        variant="secondary"
        className="w-full gap-2 border border-amber-500/40 hover:bg-amber-500/10 text-amber-700 dark:text-amber-300"
      >
        <Clock className="w-5 h-5 text-amber-500" />
        Entrar na fila de espera via WhatsApp
      </Button>
    )
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="w-full gap-2"
    >
      <MessageCircle className="w-5 h-5" />
      Entrar em contato via WhatsApp
    </Button>
  )
}
