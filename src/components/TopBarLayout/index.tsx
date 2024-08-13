'use client';
import { Button, ConfigProvider, Flex, Layout, Menu, Space } from 'antd';

import themeDefault from '../../configs/theme-default';
import styles from './top-bar-layout.module.css';

const { Content, Header, Footer } = Layout;

const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export const TopBarLayout = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider theme={themeDefault}>
    <Layout className={styles.container}>
      <Header>
        <Flex justify="space-between" align="center">
          <span className="logoFont" style={{ fontSize: 28 }}>
            eduque
          </span>
          <Space>
            <Button type="text">Faça o login</Button>
            <Button type="default">Cadastre-se</Button>
          </Space>
        </Flex>
      </Header>
      <Content>{children}</Content>
      <Footer>footer</Footer>
    </Layout>
  </ConfigProvider>
);
