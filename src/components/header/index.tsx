"use client";

import Button from "../button";

const Header = () => (
  <header className="bg-primary p-6 flex flex-col gap-8 items-center">
    <div className="flex justify-between items-center w-full">
      <img src="/images/eduque-green-logo.svg" alt="Logo" className="w-12" />
      <div>
        <Button color="secondary" textColor="primary">
          Entrar
        </Button>
        <Button>Cadastrar</Button>
      </div>
    </div>

    <h1 className="text-white text-center font-black text-7xl">
      Transformando <br />a Educação
    </h1>

    <img
      src="/images/eduque-green-typo-logo.svg"
      alt="Hero"
      className="max-w-48"
    />
  </header>
);

export default Header;
