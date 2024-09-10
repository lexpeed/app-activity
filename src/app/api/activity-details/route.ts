export async function GET() {
  return Response.json(result);
}

const result = {
  title: "Matemática",
  question: `
      A função f(x) = 2x + 3 é uma função linear.
      Qual é o valor de f(5)?
    `,
  alternatives: [
    { label: "A) 10" },
    { label: "B) 13" },
    { label: "C) 15" },
    { label: "D) 20" },
    { label: "E) 23" },
  ],
};
