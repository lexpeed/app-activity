import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    htmlContent: result,
    summary: "Atividade de Eletricidade com questões do ENEM e Vestibular.",
    tags: [
      { label: "Eletricidade" },
      { label: "ENEM" },
      { label: "Vestibular" },
    ],
  });
}

const result = `
  <h3 class="text-xl">Eletricidade</h3>

  <br />
  <div class="questoes-enem-vestibular">
    <p>01. (Enem 2020) Há muitos mitos em relação a como se proteger de raios, cobrir espelhos e não pegar em facas, garfos e outros objetos metálicos, por exemplo. Mas, de fato, se houver uma tempestade com raios, alguns cuidados são importantes, como evitar ambientes abertos. Um bom abrigo para proteção é o interior de um automóvel, desde que este não seja conversível. </p>
    <p class="direita">OLIVEIRA, A. Ralos nas tempestades de verão. Disponivel em: hitp:icienciahoje uol com.br. Acesso em: 10 dez. 2014 (adaptado). </p>
    <p>Qual o motivo físico da proteção fornecida pelos automóveis, conforme citado no texto? </p>
    <ol type="A">
      <li>Isolamento elétrico dos pneus. </li>
      <li>Efeito de para-raios da antena. </li>
      <li>Blindagem pela carcaça metálica. </li>
      <li>Escoamento da água pela lataria. </li>
      <li>Aterramento pelo fio terra da bateria.</li>
    </ol>
  </div>

  <br>
  <div class="questoes-enem-vestibular">
    <p class="questoes-enem-vestibular-foco"></p>
    <p>02. (Enem 2020) Por qual motivo ocorre a eletrização ilustrada na tirinha? <img src="https://www.projetoagathaquestoes.com.br/imagens/provas-enem/ciencias-da-natureza-pos/2020/por-qual-motivo-ocorre-a-eletrizacao.webp" alt="">
    </p>
    <ol type="A">
      <li> Troca de átomos entre a calça e os pelos do gato. </li>
      <li>Diminuição do número de prótons nos pelos do gato. </li>
      <li>Criação de novas partículas eletrizadas nos pelos do gato. </li>
      <li>Movimentação de elétrons entre a calça e os pelos do gato. </li>
      <li>Repulsão entre partículas elétricas da calça e dos pelos do gato. </li>
    </ol>
  </div>

  <br>
  <div class="questoes-enem-vestibular">
    <p class="questoes-enem-vestibular-foco"></p>
    <p>03. (ENEM 2020) Uma pessoa percebe que a bateria de seu veículo fica descarregada após cinco dias sem uso. No início desse período, a bateria funcionava normalmente e estava com o total de sua carga nominal, de 60 Ah: Pensando, na possibilidade de haver uma corrente de fuga, que se estabelece mesmo com os dispositivos elétricos do veiculo desligados, ele associa um amperímetro digital ao circuito do veículo. </p>
    <p>Qual dos esquemas indica a maneira com que o amperímetro deve ser ligado e a leitura por ele realizada? </p>
    <ol type="A">
      <li>
        <img src="https://www.projetoagathaquestoes.com.br/imagens/provas-enem/ciencias-da-natureza-pos/2020/uma-pessoa-percebe-que-a.webp" alt="">
      </li>
      <li>
        <img src="https://www.projetoagathaquestoes.com.br/imagens/provas-enem/ciencias-da-natureza-pos/2020/uma-pessoa-percebe-que-b.webp" alt="">
      </li>
      <li>
        <img src="https://www.projetoagathaquestoes.com.br/imagens/provas-enem/ciencias-da-natureza-pos/2020/uma-pessoa-percebe-que-c.webp" alt="">
      </li>
      <li>
        <img src="https://www.projetoagathaquestoes.com.br/imagens/provas-enem/ciencias-da-natureza-pos/2020/uma-pessoa-percebe-que-d.webp" alt="">
      </li>
      <li>
        <img src="https://www.projetoagathaquestoes.com.br/imagens/provas-enem/ciencias-da-natureza-pos/2020/uma-pessoa-percebe-que-e.webp" alt="">
      </li>
    </ol>
  </div>
`;
