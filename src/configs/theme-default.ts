import { theme, type ThemeConfig } from 'antd';

const themeDefault: ThemeConfig = {
  cssVar: false,
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#16c2c2',
    colorLink: '#16c2c2',
    fontFamily:
      'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  components: {
    Layout: {
      algorithm: true,
      headerBg: '#f5f5f5',
    },
  },
};

export default themeDefault;
