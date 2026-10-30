"use client"

import { useState, useMemo } from "react"
import { Search, X, SlidersHorizontal, ArrowUpDown, SearchX, RotateCcw } from "lucide-react"
import { ThingCard } from "./thing-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Thing, ThingType, ThingStatus, BookCondition } from "@/lib/things"

interface ThingGridProps {
  things: Thing[]
}

type SortOption = "padrao" | "preco-asc" | "preco-desc" | "titulo-asc"

export function ThingGrid({ things }: ThingGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<"todos" | ThingType>("todos")
  const [statusFilter, setStatusFilter] = useState<"todos" | ThingStatus>("todos")
  const [conditionFilter, setConditionFilter] = useState<"todas" | BookCondition>("todas")
  const [sortBy, setSortBy] = useState<SortOption>("padrao")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  // Função auxiliar para normalizar texto (remover acentos e minúsculas)
  const normalize = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
  }

  // Contadores globais do acervo
  const totalCount = things.length
  const booksCount = useMemo(() => things.filter((t) => t.type === "livro").length, [things])
  const objectsCount = useMemo(() => things.filter((t) => t.type === "objeto").length, [things])

  // Filtragem e ordenação
  const filteredThings = useMemo(() => {
    const query = normalize(searchQuery)

    return things
      .filter((thing) => {
        // Filtro de busca textual (título ou autor)
        if (query) {
          const matchTitle = normalize(thing.title).includes(query)
          const matchAuthor = normalize(thing.author).includes(query)
          if (!matchTitle && !matchAuthor) return false
        }

        // Filtro por tipo
        if (typeFilter !== "todos" && thing.type !== typeFilter) {
          return false
        }

        // Filtro por status
        const itemStatus: ThingStatus = thing.status || "disponivel"
        if (statusFilter !== "todos" && itemStatus !== statusFilter) {
          return false
        }

        // Filtro por conservação
        if (conditionFilter !== "todas" && thing.condition !== conditionFilter) {
          return false
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === "preco-asc") return a.price - b.price
        if (sortBy === "preco-desc") return b.price - a.price
        if (sortBy === "titulo-asc") return a.title.localeCompare(b.title)
        return 0 // "padrao" preserva a ordem do acervo
      })
  }, [things, searchQuery, typeFilter, statusFilter, conditionFilter, sortBy])

  // Verifica se há algum filtro ativo diferente do padrão
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    typeFilter !== "todos" ||
    statusFilter !== "todos" ||
    conditionFilter !== "todas" ||
    sortBy !== "padrao"

  const handleClearFilters = () => {
    setSearchQuery("")
    setTypeFilter("todos")
    setStatusFilter("todos")
    setConditionFilter("todas")
    setSortBy("padrao")
  }

  return (
    <div className="space-y-6">
      {/* Barra de Busca e Filtros Rápidos */}
      <div className="bg-card/70 border border-border/80 rounded-xl p-3.5 sm:p-5 shadow-xs space-y-4">
        {/* Campo de Busca Principal */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Buscar por título ou autor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-9 h-10 w-full bg-background"
              aria-label="Campo de busca no acervo"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Limpar termo de busca"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <Button
            type="button"
            variant={showAdvancedFilters || statusFilter !== "todos" || conditionFilter !== "todas" ? "secondary" : "outline"}
            size="default"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="h-10 gap-1.5 shrink-0"
            aria-expanded={showAdvancedFilters}
            aria-label="Mais opções de filtros"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtros</span>
            {(statusFilter !== "todos" || conditionFilter !== "todas") && (
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            )}
          </Button>
        </div>

        {/* Abas de Categoria Rápida */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setTypeFilter("todos")}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                typeFilter === "todos"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              Todos ({totalCount})
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter("livro")}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                typeFilter === "livro"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              Livros ({booksCount})
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter("objeto")}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                typeFilter === "objeto"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              Objetos ({objectsCount})
            </button>
          </div>

          {/* Seletor de Ordenação Compacto */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-background border border-border rounded-md px-2 py-1 text-xs text-foreground focus:ring-1 focus:ring-ring outline-none cursor-pointer"
              aria-label="Ordenar itens por"
            >
              <option value="padrao">Ordem do acervo</option>
              <option value="preco-asc">Menor preço</option>
              <option value="preco-desc">Maior preço</option>
              <option value="titulo-asc">Título (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Painel de Filtros Avançados Expansível */}
        {showAdvancedFilters && (
          <div className="pt-3 border-t border-border/70 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {/* Filtro por Status */}
            <div className="space-y-1.5">
              <label htmlFor="filter-status" className="font-medium text-foreground block text-xs">
                Disponibilidade
              </label>
              <select
                id="filter-status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as "todos" | ThingStatus)}
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-xs text-foreground focus:ring-1 focus:ring-ring outline-none"
              >
                <option value="todos">Todos os status</option>
                <option value="disponivel">Apenas Disponíveis</option>
                <option value="reservado">Apenas Reservados</option>
                <option value="vendido">Apenas Vendidos</option>
              </select>
            </div>

            {/* Filtro por Condição */}
            <div className="space-y-1.5">
              <label htmlFor="filter-condition" className="font-medium text-foreground block text-xs">
                Estado de Conservação
              </label>
              <select
                id="filter-condition"
                value={conditionFilter}
                onChange={(e) => setConditionFilter(e.target.value as "todas" | BookCondition)}
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-xs text-foreground focus:ring-1 focus:ring-ring outline-none"
              >
                <option value="todas">Todas as condições</option>
                <option value="Conservado">Conservado</option>
                <option value="Bom estado">Bom estado</option>
                <option value="Antigo">Antigo</option>
              </select>
            </div>
          </div>
        )}

        {/* Indicador de Resultados e Botão de Limpar */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Exibindo <strong className="text-foreground">{filteredThings.length}</strong> de{" "}
              <strong>{totalCount}</strong> itens
            </span>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center gap-1 text-primary hover:underline cursor-pointer font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Grade de Itens ou Estado Vazio */}
      {filteredThings.length > 0 ? (
        <section aria-label="Lista de itens disponíveis">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredThings.map((thing) => (
              <ThingCard key={thing.id} thing={thing} />
            ))}
          </div>
        </section>
      ) : (
        <div className="bg-card border border-border rounded-xl p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4 my-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted text-muted-foreground">
            <SearchX className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-lg sm:text-xl text-foreground font-medium">
              Nenhum item encontrado
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto">
              Não encontramos nenhum livro ou objeto correspondente aos filtros selecionados.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClearFilters}
            className="gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar todos os itens
          </Button>
        </div>
      )}
    </div>
  )
}
