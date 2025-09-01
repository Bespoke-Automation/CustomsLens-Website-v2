"use client";

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className={`h-4 w-4 transition-colors duration-300 ${
        isScrolled ? "text-gray-600" : "text-white/70"
      }`} />
      <Select value={locale} onValueChange={handleLocaleChange}>
        <SelectTrigger className={`w-20 h-8 text-sm transition-colors duration-300 border ${
          isScrolled 
            ? "bg-white text-gray-700 border-gray-300 hover:border-primary-blue" 
            : "bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm"
        }`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="zh">中文</SelectItem>
          <SelectItem value="nl">NL</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}