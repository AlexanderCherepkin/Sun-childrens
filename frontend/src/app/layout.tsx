import type { Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import './globals.css';
import { getSiteSettings } from '@/lib/api';
import { Header } from '@/components/layout/Header';
import { DeferredClientComponents } from '@/components/layout/DeferredClientComponents';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'optional',
  preload: true,
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['cyrillic'],
  display: 'optional',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: 'Франшиза «Яркие дети» — прибыльный детский образовательный центр',
    template: '%s | Яркие дети',
  },
  description:
    'Откройте детский образовательный центр «Яркие дети». Прибыль от 300 000 ₽/мес, окупаемость от 14 месяцев, запуск от 45 дней. Готовая франшиза с сопровождением 24/7.',
  keywords: [
    'франшиза детского центра',
    'детский образовательный центр',
    'бизнес для женщин',
    'франшиза Яркие дети',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Яркие дети',
  },
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang='ru' className={[geistSans.variable, playfair.variable, "h-full", "antialiased"].join(" ")}>
      <head>
      </head>
      <body className='min-h-full flex flex-col'>
        <Header
          phone={settings?.phone || process.env.NEXT_PUBLIC_SITE_PHONE || ''}
          schedule={settings?.schedule || process.env.NEXT_PUBLIC_SITE_SCHEDULE || 'Пн-Пт: 09:00-18:00'}
        />
        <main className='flex-1 pt-24'>{children}</main>
        <DeferredClientComponents
          yandexMetrikaId={settings?.yandexMetrikaId}
          gtmId={settings?.gtmId}
        />
      </body>
    </html>
  );
}
