"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export function CTASection() {
  const t = useTranslations('CTA')
  return (
    <section id="contact" className="py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/book-demo">
              <Button variant="white" size="lg" className="font-quantico uppercase tracking-wide font-semibold">
                {t('primaryButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="white-outline"
              size="lg"
              className="font-quantico uppercase tracking-wide font-medium"
            >
              {t('secondaryButton')}
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">{t('benefits.setup')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">{t('benefits.processing')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">{t('benefits.compliance')}</span>
            </div>
          </div>

          <div className="text-white/70 text-sm">
            <p>{t('footer')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
