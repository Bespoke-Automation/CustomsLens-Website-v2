import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    return {
      locale: 'en',
      messages: (await import(`@/messages/en.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});