"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Headphones, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export function FeaturesSection() {
  const t = useTranslations('Features')
  
  const solutions = [
    {
      icon: FileText,
      title: t('hsCodes.title'),
      description: t('hsCodes.description'),
      benefits: [t('hsCodes.benefit1'), t('hsCodes.benefit2'), t('hsCodes.benefit3')],
    },
    {
      icon: Users,
      title: t('compliance.title'),
      description: t('compliance.description'),
      benefits: [t('compliance.benefit1'), t('compliance.benefit2'), t('compliance.benefit3')],
    },
    {
      icon: Headphones,
      title: t('documents.title'),
      description: t('documents.description'),
      benefits: [t('documents.benefit1'), t('documents.benefit2'), t('documents.benefit3')],
    },
  ]
  
  return (
    <section id="features" className="relative py-24">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white text-primary-blue text-sm font-medium shadow-sm mb-4">
            {t('title')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-foreground mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-blue-100/70 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-primary-blue transition-all duration-300 group-hover:bg-blue-100">
                  <solution.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-quantico font-bold text-card-foreground mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-8">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-[rgba(0,102,255,0.4)]" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="link" 
                  className="group/btn text-primary-blue p-0 h-auto font-quantico uppercase tracking-wide font-medium"
                >
                  {t('learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works Preview */}
        <div className="text-center rounded-3xl border border-blue-100 bg-white/90 p-12 shadow-sm backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl font-quantico font-bold text-foreground mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo">
              <Button variant="primary" size="lg" className="font-quantico uppercase tracking-wide font-medium">
                {t('cta.requestDemo')}
              </Button>
            </Link>
            <Button variant="primary-outline" size="lg" className="font-quantico uppercase tracking-wide font-medium">
              {t('cta.viewPricing')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
