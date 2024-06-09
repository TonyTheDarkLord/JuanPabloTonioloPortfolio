import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './css/stylesheet.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juan Pablo Toniolo - SRE',
  description: 'Portfolio made by a SRE/Sysadmin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header></header>
        {children}

        <footer></footer>
      </body>
    </html>
  );
}
