import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Водолечебница №2',
  description: 'Официальная страница учреждения',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
