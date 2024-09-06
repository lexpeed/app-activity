export async function GET() {
  return Response.json(results);
}

const results = [
  {
    tags: [{ label: "Matemática" }, { label: "Equação" }],
    content: "Resolva a equação 2x + 3 = 7",
  },
  {
    tags: [{ label: "Português" }, { label: "Interpretação de texto" }],
    content: "Leia o texto e responda: Qual é o personagem principal?",
  },
  {
    tags: [{ label: "Geografia" }, { label: "Clima" }],
    content: "Qual é o clima predominante no Brasil?",
  },
  {
    tags: [{ label: "História" }, { label: "Brasil" }],
    content: "Quem descobriu o Brasil?",
  },
  {
    tags: [{ label: "Inglês" }, { label: "Vocabulário" }],
    content: "O que significa a palavra 'book'?",
  },
  {
    tags: [{ label: "Biologia" }, { label: "Célula" }],
    content: "Qual é a menor parte de um ser vivo?",
  },
  {
    tags: [{ label: "Física" }, { label: "Movimento" }],
    content: "O que é a 1ª Lei de Newton?",
  },
  {
    tags: [{ label: "Química" }, { label: "Tabela periódica" }],
    content: "Qual é o símbolo do ouro na tabela periódica?",
  },
];
