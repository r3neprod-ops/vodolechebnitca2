import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Водолечение и физиотерапия по ОМС в Луганске — ЛРФТП им. А. Е. Щербака',
  description:
    'Государственная физиотерапевтическая поликлиника в Луганске: водолечение, физиотерапия и медицинская реабилитация бесплатно по ОМС. Приём врачей, назначение процедур, адрес, телефон и график работы.',
  openGraph: {
    title: 'Водолечение и физиотерапия по ОМС в Луганске — ЛРФТП им. А. Е. Щербака',
    description:
      'Государственная физиотерапевтическая поликлиника в Луганске: водолечение, физиотерапия и медицинская реабилитация бесплатно по ОМС. Приём врачей, назначение процедур, адрес, телефон и график работы.',
    type: 'website',
    locale: 'ru_RU',
  },
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
