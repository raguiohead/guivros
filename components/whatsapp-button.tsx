"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  title: string
  price: string
}

export function WhatsAppButton({ title, price }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5585998125976"
    const message = `Olá! Tenho interesse no livro "${title}" por ${price} que vi no site guivros e afins.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="w-full gap-2"
    >
      <MessageCircle className="w-5 h-5" />
      Entrar em contato
    </Button>
  )
}
