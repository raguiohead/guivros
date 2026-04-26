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

export const things: Thing[] = [
  {
    id: 1,
    title: "Sabor Amargo",
    author: "James Hannaham",
    price: 50,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/sabor_amargo.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/sabor_amargo_2.jpg"
    ],
    condition: "Conservado",
    description: "Sabor Amargo é um aclamado romance de James Hannaham que aborda a escravidão contemporânea, o racismo e a dependência química.  A narrativa começa com um homem sem as duas mãos fugindo desesperadamente de uma fazenda misteriosa, onde é mantido cativo.\nA trama se entrelaça com a história de Darlene, uma mulher cuja vida é devastada pelo assassinato de seu marido, pelo preconceito e pelo vício em crack (cujas experiências são narradas pela própria droga, chamada Scotty).  Ela é aprisionada na fazenda para pagar uma dívida invisível e trabalhar até a exaustão. Paralelamente, seu filho Eddie parte em busca da mãe, lutando para sobreviver e reencontrá-la.\nSaiba mais no link da <a href='https://www.darksidebooks.com.br/sabor-amargo/p'>DarkSide</a>.",
    type: "livro"
  },
  {
    id: 2,
    title: "Água Viva",
    author: "Clarice Lispector",
    price: 20,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/agua_viva_2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/agua_viva.jpg"
    ],
    condition: "Bom estado",
    description: "Água Viva é um romance de Clarice Lispector que explora a psique humana e a condição existencial. A narrativa se desenvolve através de monólogos internos e reflexões profundas sobre a vida e a morte. Um clássico da literatura brasileira.",
    type: "livro"
  },
  {
    id: 3,
    title: "Nação Tomada pelo Medo",
    author: "Thom Yorke e Stanley Donwood",
    price: 30,
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
    id: 4,
    title: "Capitães da Areia",
    author: "Jorge Amado",
    price: 20,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/capitaes_da_areia.jpg"
    ],
    condition: "Antigo",
    description: "Uma das obras mais populares de Jorge Amado, retrata a vida de um grupo de menores abandonados que vivem em um trapiche em Salvador. A narrativa explora a liberdade, a marginalidade e a irmandade desses jovens conhecidos como Capitães da Areia.",
    type: "livro"
  },
  {
    id: 5,
    title: "Crônicas de Pai",
    author: "Leo Aversa",
    price: 20,
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
    price: 35,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/legiao.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/legiao_2.jpg"
    ],
    condition: "Conservado",
    description: "A continuação espiritual de O Exorcista. Neste thriller psicológico e sobrenatural da DarkSide Books, o detetive Kinderman investiga uma série de assassinatos brutais que lembram o modus operandi de um serial killer morto há anos.\nSaiba mais no link da <a href='https://www.darksidebooks.com.br/legiao/p'>DarkSide</a>.",
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
    description: "Nesta edição primorosa da DarkSide Books, Eric Weiner viaja por cidades e épocas que produziram surtos criativos — como a Atenas Antiga e o Vale do Silício — para entender como o ambiente molda a genialidade.\nSaiba mais no link da <a href='https://www.darksidebooks.com.br/onde-nascem-os-genios/p'>DarkSide</a>.",
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
    price: 20,
    images: [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/sociedade_do_cansaco.jpg"
    ],
    condition: "Conservado",
    description: "Neste ensaio filosófico, Han discute como a sociedade contemporânea passou de uma cultura de disciplina para uma cultura de desempenho, levando indivíduos à exaustão e a transtornos como o burnout.",
    type: "livro"
  },
  {
    "id": 11,
    "title": "O Poder do Hábito",
    "author": "Charles Duhigg",
    "price": 40,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/o-poder-do-habito-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/o-poder-do-habito.jpg"
    ],
    "condition": "Bom estado",
    "description": "Nesta obra, Duhigg explora como os hábitos funcionam e como podem ser transformados. Com base em estudos científicos e exemplos reais, o livro revela como pequenas mudanças na rotina podem gerar grandes impactos na produtividade e no bem-estar.",
    "type": "livro"
  },
  {
    "id": 12,
    "title": "Box Harry Potter - Coleção Completa",
    "author": "J.K. Rowling",
    "price": 200,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-box.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-box-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-box-3.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/0-hp-box-.jpg"
    ],
    "condition": "Bom estado",
    "description": "A coleção completa da saga que encantou gerações. Este box reúne os sete livros da jornada de Harry Potter contra as forças das trevas, apresentando o mundo bruxo de Hogwarts em sua totalidade.",
    "type": "livro"
  },
  {
    "id": 13,
    "title": "Harry Potter e a Pedra Filosofal",
    "author": "J.K. Rowling",
    "price": 32,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-1.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-1-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/1-hp-pedraFilosofal.jpg"
    ],
    "condition": "Bom estado",
    "description": "O início de tudo. Harry Potter descobre no seu aniversário de 11 anos que é um bruxo e parte para a Escola de Magia e Bruxaria de Hogwarts, onde faz amigos e descobre segredos sobre seu passado.",
    "type": "livro"
  },
  {
    "id": 14,
    "title": "Harry Potter e a Câmara Secreta",
    "author": "J.K. Rowling",
    "price": 32,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-2-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/2-hp-camaraSecreta.jpg"
    ],
    "condition": "Bom estado",
    "description": "Em seu segundo ano, Harry ignora os avisos de um elfo doméstico e retorna a Hogwarts, apenas para encontrar a escola sob a ameaça de um monstro que petrifica os alunos.",
    "type": "livro"
  },
  {
    "id": 15,
    "title": "Harry Potter e o Prisioneiro de Azkaban",
    "author": "J.K. Rowling",
    "price": 36,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-3.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-3-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/3-hp-prisioneiroDeAzkaban.jpg"
    ],
    "condition": "Bom estado",
    "description": "Um perigoso assassino, Sirius Black, foge da prisão de Azkaban e parece estar à procura de Harry. Enquanto isso, o jovem bruxo aprende a enfrentar seus piores medos.",
    "type": "livro"
  },
  {
    "id": 16,
    "title": "Harry Potter e o Cálice de Fogo",
    "author": "J.K. Rowling",
    "price": 44,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-4.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-4-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/4-hp-caliceDeFogo.jpg"
    ],
    "condition": "Bom estado",
    "description": "Hogwarts sedia o Torneio Tribruxo, uma competição perigosa entre escolas de magia. Harry é misteriosamente selecionado como o quarto campeão, enfrentando desafios mortais.",
    "type": "livro"
  },
  {
    "id": 17,
    "title": "Harry Potter e a Ordem da Fênix",
    "author": "J.K. Rowling",
    "price": 48,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-5.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-5-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/5-hp-ordemDaFenix.jpg"
    ],
    "condition": "Bom estado",
    "description": "Com o retorno de Lord Voldemort sendo negado pelo Ministério da Magia, Harry e seus amigos formam um grupo secreto para se defenderem e lutarem contra as trevas que se aproximam.",
    "type": "livro"
  },
  {
    "id": 18,
    "title": "Harry Potter e o Enigma do Príncipe",
    "author": "J.K. Rowling",
    "price": 40,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-6.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-6-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/6-hp-enigmaDoPrincipe.jpg"
    ],
    "condition": "Bom estado",
    "description": "Harry descobre um livro antigo pertencente ao 'Príncipe Mestiço' que o ajuda nas aulas de Poções, enquanto Dumbledore o prepara para o confronto final contra Voldemort.",
    "type": "livro"
  },
  {
    "id": 19,
    "title": "Harry Potter e as Relíquias da Morte",
    "author": "J.K. Rowling",
    "price": 40,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-7.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-7-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/7-hp-reliquiasDaMorte.jpg"
    ],
    "condition": "Bom estado",
    "description": "O capítulo final. Harry, Rony e Hermione abandonam Hogwarts para caçar e destruir as Horcruxes de Voldemort, culminando em uma batalha épica pelo futuro do mundo bruxo.",
    "type": "livro"
  },
  {
    "id": 20,
    "title": "Harry Potter e a Criança Amaldiçoada",
    "author": "J.K. Rowling, Jack Thorne, John Tiffany",
    "price": 32,
    "images": [
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-8.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/hp-8-2.jpg",
      "https://ukghebfwessjubykqqwb.supabase.co/storage/v1/object/public/fotos-guivros/8-hp-criancaAmaldicoada.jpg"
    ],
    "condition": "Bom estado",
    "description": "Anos após a Batalha de Hogwarts, Harry agora trabalha no Ministério enquanto seu filho, Alvo, luta com o peso do legado da família Potter em uma história de viagens no tempo e amizade.",
    "type": "livro"
  }
]

export function getThingById(id: number): Thing | undefined {
  return things.find(thing => thing.id === id)
}