import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { Manrope, Quantico } from 'next/font/google';
import { defaultLocale } from '@/i18n.config';
import './globals.css';

const quantico = Quantico({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quantico',
  weight: ['400', '700']
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700']
});

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') ?? defaultLocale;

  return (
    <html
      lang={locale}
      className={`${quantico.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background font-manrope text-foreground">
        {children}
      </body>
    </html>
  );
}
