export type BookCondition = "Conservado" | "Bom estado" | "Antigo"
export type ThingType = "livro" | "objeto"

export interface Thing {
  id: number
  title: string
  author: string
  price: number
  images: string[]
  condition: BookCondition
  description: string
  type: ThingType
}

/* * LISTA DE PREÇOS ATUALIZADOS BASEADA EM PESQUISA DE MERCADO:
 * * 1. Sabor Amargo (James Hannaham) - R$ 45,00
 * Justificativa: Um exemplar novo varia entre R$ 55 e R$ 80. Como o seu está "Conservado", R$ 45 é um preço justo para venda de segunda mão.
 * * 3. Nação Tomada pelo Medo (Thom Yorke) - R$ 35,00
 * Justificativa: Novo na faixa de R$ 50 a R$ 70. Exemplares usados costumam sair por volta de R$ 35 a R$ 40 em sebos virtuais.
 * * 5. Crônicas de Pai (Leo Aversa) - R$ 35,00
 * Justificativa: O preço de capa atual costuma ser R$ 79,90. R$ 35 é um ótimo desconto que torna a compra atrativa para o estado "Conservado".
 * * 6. Legião (William Peter Blatty) - R$ 40,00
 * Justificativa: Livros da DarkSide têm alta procura. Um novo sai por volta de R$ 65, então R$ 40 é um valor muito bom e competitivo.
 * * 7. Onde Nascem os Gênios (Eric Weiner) - R$ 45,00
 * Justificativa: O novo varia de R$ 70 a R$ 80. Mantivemos os seus originais R$ 45 pois é uma excelente margem para essa edição.
 * * 8. Luminária Pato de Borracha (Decor) - R$ 30,00
 * Justificativa: Valor original mantido por estar na faixa de objetos de decoração similares.
 * * 9. Poemas Completos de Alberto Craveiro - R$ 25,00
 * Justificativa: Valor mantido de acordo com a média para antologias poéticas similares.
 * * 10. Sociedade do Cansaço (Byung-Chul Han) - R$ 25,00
 * Justificativa: O livro novo custa entre R$ 35 e R$ 53 hoje. R$ 25 é um valor de repasse bem rápido.
 * * 11. O Poder do Hábito (Charles Duhigg) - R$ 35,00
 * Justificativa: Novo está na faixa de R$ 55 a R$ 80. Por estar em "Bom estado", R$ 35 é o preço ideal no mercado de usados.
 */

export const things: Thing[] = [
  {
    id: 1,
    title: "Sabor Amargo",
    author: "James Hannaham",
    price: 45,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/sabor_amargo.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/sabor_amargo_2.jpg"
    ],
    condition: "Conservado",
    description: "Sabor Amargo é um aclamado romance de James Hannaham que aborda a escravidão contemporânea, o racismo e a dependência química. A narrativa começa com um homem sem as duas mãos fugindo desesperadamente de uma fazenda misteriosa, onde é mantido cativo.\nA trama se entrelaça com a história de Darlene, uma mulher cuja vida é devastada pelo assassinato de seu marido, pelo preconceito e pelo vício em crack (cujas experiências são narradas pela própria droga, chamada Scotty). Ela é aprisionada na fazenda para pagar uma dívida invisível e trabalhar até a exaustão. Paralelamente, seu filho Eddie parte em busca da mãe, lutando para sobreviver e reencontrá-la.\nSaiba mais no link da [DarkSide](https://www.darksidebooks.com.br/sabor-amargo/p).",
    type: "livro"
  },
  {
    id: 3,
    title: "Nação Tomada pelo Medo",
    author: "Thom Yorke e Stanley Donwood",
    price: 35,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/nacao_tomada_pelo_medo.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/nacao_tomada_pelo_medo_2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/nacao_tomada_pelo_medo_3.jpg"
    ],
    condition: "Conservado",
    description: "Muito mais que um livro, Nação Tomada pelo Medo é uma experiência — uma documentação belíssima do processo de artistas incomparáveis, e um espelho dos medos, presságios e fantasias invocados pelo mundo à medida que os seus cidadãos enfrentam um admirável novo milênio.",
    type: "livro"
  },
  {
    id: 5,
    title: "Crônicas de Pai",
    author: "Leo Aversa",
    price: 35,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/cronicas_de_pai.jpg"
    ],
    condition: "Conservado",
    description: "Uma coletânea de textos bem-humorados e sensíveis sobre as descobertas, medos e alegrias da paternidade no mundo contemporâneo. Leo Aversa compartilha crônicas que ressoam com qualquer um que viva a montanha-russa de criar um filho.",
    type: "livro"
  },
  {
    id: 6,
    title: "Legião",
    author: "William Peter Blatty",
    price: 40,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/legiao.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/legiao_2.jpg"
    ],
    condition: "Conservado",
    description: "A continuação espiritual de O Exorcista. Neste thriller psicológico e sobrenatural da DarkSide Books, o detetive Kinderman investiga uma série de assassinatos brutais que lembram o modus operandi de um serial killer morto há anos.\nSaiba mais no link da [DarkSide](https://www.darksidebooks.com.br/legiao/p).",
    type: "livro"
  },
  {
    id: 7,
    title: "Onde Nascem os Gênios",
    author: "Eric Weiner",
    price: 45,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/onde_nascem_os_genios.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/onde_nascem_os_genios_2.jpg"
    ],
    condition: "Conservado",
    description: "Nesta edição primorosa da DarkSide Books, Eric Weiner viaja por cidades e épocas que produziram surtos criativos — como a Atenas Antiga e o Vale do Silício — para entender como o ambiente molda a genialidade.\nSaiba mais no link da [DarkSide](https://www.darksidebooks.com.br/onde-nascem-os-genios-99/p).",
    type: "livro"
  },
  {
    id: 8,
    title: "Luminária Pato de Borracha",
    author: "Decor",
    price: 30,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/pato.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/pato_2.jpg"
    ],
    condition: "Conservado",
    description: "Uma luminária divertida e moderna em formato de pato de borracha. Perfeita para decoração de quartos ou escritórios, proporcionando uma luz suave e um toque de criatividade ao ambiente.",
    type: "objeto"
  },
  {
    id: 9,
    title: "Poemas Completos de Alberto Craveiro",
    author: "Alberto Craveiro",
    price: 25,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/poemas_completos_de_alberto_craveiro.jpg"
    ],
    condition: "Conservado",
    description: "Uma reunião da obra poética de Alberto Craveiro, nome importante da literatura cearense. Seus versos transitam entre o cotidiano e a introspecção, preservando a memória e a sensibilidade lírica do autor.",
    type: "livro"
  },
  {
    id: 10,
    title: "Sociedade do Cansaço",
    author: "Byung-Chul Han",
    price: 25,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/sociedade_do_cansaco.jpg"
    ],
    condition: "Conservado",
    description: "Neste ensaio filosófico, Han discute como a sociedade contemporânea passou de uma cultura de disciplina para uma cultura de desempenho, levando indivíduos à exaustão e a transtornos como o burnout.",
    type: "livro"
  },
  {
    id: 11,
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    price: 35,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/o-poder-do-habito-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/o-poder-do-habito.jpg"
    ],
    condition: "Bom estado",
    description: "Nesta obra, Duhigg explora como os hábitos funcionam e como podem ser transformados. Com base em estudos científicos e exemplos reais, o livro revela como pequenas mudanças na rotina podem gerar grandes impactos na produtividade e no bem-estar.",
    type: "livro"
  }
]

export function getThingById(id: number): Thing | undefined {
  return things.find(thing => thing.id === id)
}