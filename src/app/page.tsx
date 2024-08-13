'use client';
import { Flex, Input, Space, Typography } from 'antd';

import { TopBarLayout } from '../components/TopBarLayout';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;
const { Search } = Input;

export default function Home() {
  return (
    <TopBarLayout>
      <Flex
        className={styles.content}
        vertical
        justify="center"
        align="center"
        gap="middle"
      >
        <Title level={3}>
          Encontre e compartilhe atividades com seus alunos e outros professores
        </Title>

        <Search placeholder="Ex: atividades de matemática" />

        <div className="search-options">
          <Title level={5}>ou busque por áreas do conhecimento</Title>

          <Space>teste</Space>
          {/* <AreaKnowledgeButton
              text="Linguagens, Códigos e suas Tecnologias"
              iconUrl="/images/languages.png"
            />
            <AreaKnowledgeButton
              text="Ciências da Natureza e suas Tecnologias"
              iconUrl="/images/naturalsciences.png"
            />
            <AreaKnowledgeButton
              text="Matemática e suas Tecnologias"
              iconUrl="/images/math.png"
            />
            <AreaKnowledgeButton
              text="Ciências Humanas e suas Tecnologias"
              iconUrl="/images/humanscience.png"
            /> */}
        </div>
      </Flex>

      {/* </div> */}
      {/* <FooterHomeLoggedOut /> */}
      {/* </div> */}
    </TopBarLayout>
  );
}
