import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n.config';

export const metadata: Metadata = {
  title: "CustomsLens - Streamline Customs Clearance in the Netherlands",
  description:
    "AI-powered customs clearance platform for Dutch brokers, forwarders, and importers. Automate DV/BFV processing, streamline customs requests, and ensure 100% compliance.",
  keywords: "customs clearance, Netherlands customs, DV BFV automation, Dutch customs broker, Rotterdam port, customs software",
  generator: "v0.app",
  icons: {
    icon: "/customslens-logo.png",
    shortcut: "/customslens-logo.png",
    apple: "/customslens-logo.png",
  },
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
