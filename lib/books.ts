export type BookCondition = "Conservado" | "Bom estado" | "Antigo"

export interface Book {
  id: number
  title: string
  author: string
  price: number
  images: string[]
  condition: BookCondition
  description: string
}

export const books: Book[] = [
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
    description: "Sabor Amargo é um aclamado romance de James Hannaham que aborda a escravidão contemporânea, o racismo e a dependência química.  A narrativa começa com um homem sem as duas mãos fugindo desesperadamente de uma fazenda misteriosa, onde é mantido cativo.\nA trama se entrelaça com a história de Darlene, uma mulher cuja vida é devastada pelo assassinato de seu marido, pelo preconceito e pelo vício em crack (cujas experiências são narradas pela própria droga, chamada Scotty).  Ela é aprisionada na fazenda para pagar uma dívida invisível e trabalhar até a exaustão. Paralelamente, seu filho Eddie parte em busca da mãe, lutando para sobreviver e reencontrá-la.\nSaiba mais no link da <a href='https://www.darksidebooks.com.br/sabor-amargo/p'>DarkSide</a>."
  }
  
  // {
  //   id: 2,
  //   title: "Cem Anos de Solidão",
  //   author: "Gabriel García Márquez",
  //   price: 35,
  //   images: [
  //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Conservado",
  //   description: "Exemplar muito bem conservado do clássico do realismo mágico. Capa íntegra, lombada firme e páginas em ótimo estado. A saga da família Buendía em Macondo que conquistou leitores ao redor do mundo."
  // },
  // {
  //   id: 3,
  //   title: "A Metamorfose",
  //   author: "Franz Kafka",
  //   price: 18,
  //   images: [
  //     "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Antigo",
  //   description: "Edição antiga com marcas do tempo. Capa com pequenos desgastes nas bordas, mas o miolo está completo e legível. Ideal para quem aprecia livros com história e personalidade."
  // },
  // {
  //   id: 4,
  //   title: "Dom Quixote",
  //   author: "Miguel de Cervantes",
  //   price: 40,
  //   images: [
  //     "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Bom estado",
  //   description: "Edição completa da obra que fundou o romance moderno. Livro em bom estado, com algumas anotações a lápis nas margens (facilmente apagáveis). Uma aventura épica que continua encantando leitores há séculos."
  // },
  // {
  //   id: 5,
  //   title: "1984",
  //   author: "George Orwell",
  //   price: 28,
  //   images: [
  //     "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Conservado",
  //   description: "Exemplar em excelente estado da distopia mais influente do século XX. Capa firme, páginas brancas, sem marcações. Leitura essencial para entender o mundo contemporâneo."
  // },
  // {
  //   id: 6,
  //   title: "O Pequeno Príncipe",
  //   author: "Antoine de Saint-Exupéry",
  //   price: 22,
  //   images: [
  //     "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Conservado",
  //   description: "Edição ilustrada em ótimo estado. Ilustrações originais do autor preservadas em cores vibrantes. Um livro para todas as idades que fala sobre amor, amizade e o essencial invisível aos olhos."
  // },
  // {
  //   id: 7,
  //   title: "Crime e Castigo",
  //   author: "Fiódor Dostoiévski",
  //   price: 32,
  //   images: [
  //     "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Bom estado",
  //   description: "Tradução direta do russo. Livro em bom estado com capa brochura resistente. Mergulhe na mente atormentada de Raskólnikov nesta obra-prima da literatura mundial."
  // },
  // {
  //   id: 8,
  //   title: "A Hora da Estrela",
  //   author: "Clarice Lispector",
  //   price: 24,
  //   images: [
  //     "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Conservado",
  //   description: "Último romance de Clarice em estado impecável. A história de Macabéa contada com a prosa única de Lispector. Páginas limpas, capa sem dobras."
  // },
  // {
  //   id: 9,
  //   title: "Grande Sertão: Veredas",
  //   author: "Guimarães Rosa",
  //   price: 38,
  //   images: [
  //     "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Antigo",
  //   description: "Edição de colecionador com marcas do tempo que contam sua própria história. Capa com pátina característica, páginas amareladas mas íntegras. A obra-prima de Rosa merece um lugar especial na estante."
  // },
  // {
  //   id: 10,
  //   title: "Memórias Póstumas de Brás Cubas",
  //   author: "Machado de Assis",
  //   price: 20,
  //   images: [
  //     "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Bom estado",
  //   description: "O romance que revolucionou a literatura brasileira. Exemplar bem cuidado com lombada firme. A ironia afiada do Bruxo do Cosme Velho em ótima companhia para tardes de leitura."
  // },
  // {
  //   id: 11,
  //   title: "Vidas Secas",
  //   author: "Graciliano Ramos",
  //   price: 26,
  //   images: [
  //     "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=600&fit=crop&q=80",
  //     "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Conservado",
  //   description: "Edição em excelente estado do clássico regionalista. A saga de Fabiano e sua família no sertão nordestino, narrada com a prosa enxuta e poderosa de Graciliano."
  // },
  // {
  //   id: 12,
  //   title: "O Cortiço",
  //   author: "Aluísio Azevedo",
  //   price: 19,
  //   images: [
  //     "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop&q=80"
  //   ],
  //   condition: "Antigo",
  //   description: "Exemplar vintage do romance naturalista brasileiro. Apresenta sinais de uso mas está completo e legível. Um retrato vívido do Rio de Janeiro do século XIX."
  // },
]

export function getBookById(id: number): Book | undefined {
  return books.find(book => book.id === id)
}
