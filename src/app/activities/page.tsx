import {
  ActivityResultCard,
  Breadcrumbs,
  Container,
  Footer,
} from "../../components";

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
];

const ActivitiesPage = () => {
  return (
    <div className="py-2">
      <header>
        <Container>
          <img src="/images/eduque-purple-logo.svg" alt="Purple Logo" />
        </Container>
      </header>
      <Container>
        <div className="py-3">
          <Breadcrumbs
            items={[
              { label: "Home", url: "/" },
              { label: "Activities", url: "/activities" },
            ]}
          />
          <h1 className="text-5xl font-bold text-gray-800 my-4">Questões</h1>

          <div className="flex gap-4 flex-col">
            <div>
              <h3 className="text-lg mb-5">Filtros Avançados</h3>
              <div>
                <label>Matéria</label>
                <select>
                  <option>Matemática</option>
                  <option>Português</option>
                  <option>Geografia</option>
                  <option>História</option>
                  <option>Biologia</option>
                  <option>Química</option>
                  <option>Física</option>
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-5">Resultados</h3>
              <div className="gap-4 grid grid-cols-2">
                {results.map((result, index) => (
                  <ActivityResultCard key={index} tags={result.tags}>
                    {result.content}
                  </ActivityResultCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
