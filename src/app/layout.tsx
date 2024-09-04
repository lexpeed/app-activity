import type { Metadata } from "next";

import { inter, playwriteCL } from "../configs/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Eduque",
  description: "Banco de atividades gratuitas para professores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playwriteCL.variable}`}>
      <body>{children}</body>
    </html>
  );
}
