"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale, useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')
  const locale = useLocale()
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-blue-100/70 bg-white/90 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-48 w-48 rounded-full bg-[rgba(59,130,246,0.12)] blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-56 w-56 rounded-full bg-[rgba(14,116,144,0.08)] blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/customslens-logo.png"
                alt="CustomsLens logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="text-2xl font-quantico font-bold text-primary-blue">CustomsLens</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t('description')}
            </p>

            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3 text-foreground">{t('newsletter.title')}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t('newsletter.description')}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="h-11 bg-white/70 border-blue-100 text-foreground placeholder:text-muted-foreground focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/20"
                />
                <Button variant="primary" size="sm" className="h-11 px-6 font-quantico uppercase tracking-wide font-medium shadow-sm">
                  {t('newsletter.subscribe')}
                </Button>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('product.title')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary-blue transition-colors">
                  {t('product.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-blue transition-colors">
                  {t('product.pricing')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-blue transition-colors">
                  {t('product.integrations')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-blue transition-colors">
                  {t('product.apiDocs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('company.title')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary-blue transition-colors">
                  {t('company.about')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-blue transition-colors">
                  {t('company.careers')}
                </a>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-primary-blue transition-colors">
                  {t('company.blog')}
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-blue transition-colors">
                  {t('company.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-blue transition-colors">
                  {t('legal.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-blue transition-colors">
                  {t('legal.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-100/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 sm:mb-0">
            {t('copyright')}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="mailto:leon@customslens.nl" className="text-muted-foreground hover:text-primary-blue transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/customslens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary-blue transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
