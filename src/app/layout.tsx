import type { Metadata } from 'next';
import { Suspense } from 'react';

import { inter, playwriteCL } from '../configs/fonts';
import './globals.css';
import { Providers } from '@/components';

export const metadata: Metadata = {
  title: 'Portal Eduque',
  description: 'Banco de atividades gratuitas para professores',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playwriteCL.variable}`}>
      {/* <Providers>
        <body>
          <Suspense>{children}</Suspense>
        </body>
      </Providers> */}
      <body>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', margin: '0 auto' }}
          width="1440"
          height="1288"
          src="https://embed.figma.com/proto/EOwpEaeQte9bpP1UtxjL9M/2.1-Eduque-%7C-UX%26UI-Portal?page-id=356%3A8012&node-id=356-8433&node-type=canvas&viewport=559%2C788%2C0.14&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=356%3A8433&embed-host=share"
          allowFullScreen
        ></iframe>
      </body>
    </html>
  );
}
