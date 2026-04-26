"use client"

import { ThingCard } from "./thing-card"
import type { Thing } from "@/lib/things"

interface ThingGridProps {
  things: Thing[]
}

export function ThingGrid({ things }: ThingGridProps) {
  return (
    <section aria-label="Lista de itens disponíveis">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {things.map((thing) => (
          <ThingCard key={thing.id} thing={thing} />
        ))}
      </div>
    </section>
  )
}