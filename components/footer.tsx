"use client"

import { Linkedin, Mail, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-quantico font-bold">CustomsLens</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              {t('description')}
            </p>

            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3 text-background">{t('newsletter.title')}</h4>
              <p className="text-sm text-background/70 mb-3">{t('newsletter.description')}</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary-blue"
                />
                <Button variant="primary" size="sm" className="font-quantico uppercase tracking-wide font-medium">
                  {t('newsletter.subscribe')}
                </Button>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-background">{t('product.title')}</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#features" className="hover:text-background transition-colors">
                  {t('product.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-background transition-colors">
                  {t('product.pricing')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('product.integrations')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('product.apiDocs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-background">{t('company.title')}</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('company.about')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('company.careers')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('company.blog')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  {t('company.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('legal.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t('legal.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 sm:mb-0">
            {t('copyright')}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="mailto:hello@customslens.nl" className="text-background/60 hover:text-background transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
