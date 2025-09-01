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
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full text-primary-blue text-sm font-medium mb-4">
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
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl group-hover:bg-slate-200 transition-all duration-300">
                  <solution.icon className="h-8 w-8 text-primary-blue transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-quantico font-bold text-card-foreground mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-8">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
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
        <div className="text-center bg-gradient-card rounded-3xl p-12 border border-border/50">
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
