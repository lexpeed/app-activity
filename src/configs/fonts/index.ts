import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const playwriteCL = localFont({
  src: './Playwrite_CL/PlaywriteCL-VariableFont_wght.ttf',
  variable: '--font-playwrite-cl',
  display: 'swap',
});
