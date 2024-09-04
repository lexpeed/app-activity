import { Button, Header } from "../components";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-8 my-8 mx-auto w-full max-w-screen-md">
        <h3 className="text-center text-2xl text-gray-800">
          Encontre e compartilhe atividades com seus alunos e outros professores
        </h3>
        <div className="flex items-center gap-8 w-full">
          <input
            type="text"
            placeholder="Pesquise sua atividade"
            className={`
                flex-grow
                border border-primary rounded-sm
                px-4 py-2 text-md
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
              `}
          />
          <div>
            <Button>Pesquisar</Button>
          </div>
        </div>
        <h3 className="text-center text-2xl text-gray-800">
          ou busque por área de conhecimento
        </h3>
        <div></div>
      </div>
    </div>
  );
}
