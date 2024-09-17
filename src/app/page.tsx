"use client";

import { useRouter } from "next/navigation";
import { Header, KnowledgeAreaCard, Footer } from "../components";
import { appRoutes } from "../utils";
import {
  TextField,
  Container,
  Button,
  Select,
} from "@/components/eduque-components";
import {
  LaptopOutlined,
  ExperimentOutlined,
  CalculatorOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const areas = [
  {
    description: "Linguagens, Códigos e suas Tecnologias",
    icon: <LaptopOutlined />,
  },
  {
    description: "Ciências da Natureza e suas Tecnologias",
    icon: <ExperimentOutlined />,
  },
  {
    description: "Matemática e suas Tecnologias",
    icon: <CalculatorOutlined />,
  },
  {
    description: "Ciências Humanas e suas Tecnologias",
    icon: <GlobalOutlined />,
  },
];

export default function Home() {
  const router = useRouter();
  const onSearch = () => {
    router.push(appRoutes.activities);
  };

  return (
    <div>
      <Header />
      <div
        className={`
        bg-gray-200
        flex justify-center items-center
        py-5
      `}
      >
        <Container>
          <div
            className={`
              flex flex-col items-center sm:flex-row
              gap-4 sm:gap-6
            `}
          >
            <div className="flex-1 w-full">
              <TextField fullWidth placeholder="Pesquise sua atividade" />
            </div>
            <div className="flex gap-4 max-sm:w-full sm:gap-2">
              <Select fullWidth>
                <option value="">Grau de Escolaridade</option>
              </Select>
              <Button onClick={onSearch}>Pesquisar</Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col justify-center items-center gap-8 my-8 w-full">
          <h3 className="text-center text-2xl text-gray-800">
            Áreas de Conhecimento
          </h3>
          <div
            className={`
            w-full grid grid-cols-2 gap-4
          `}
          >
            {areas.map((area) => (
              <KnowledgeAreaCard
                key={area.description}
                description={area.description}
                icon={
                  <span className="text-secondary text-lg">{area.icon}</span>
                }
              />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
