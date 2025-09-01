"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, UserPlus, Zap, BarChart } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export function HowItWorksSection() {
  const t = useTranslations('HowItWorks')
  
  const userJourneys = [
    {
      title: t('brokers.title'),
      description: t('brokers.description'),
      steps: [t('brokers.step1'), t('brokers.step2'), t('brokers.step3'), t('brokers.step4')],
      cta: t('brokers.cta'),
      color: "blue"
    },
    {
      title: t('forwarders.title'),
      description: t('forwarders.description'),
      steps: [t('forwarders.step1'), t('forwarders.step2'), t('forwarders.step3'), t('forwarders.step4')],
      cta: t('forwarders.cta'),
      color: "green"
    },
    {
      title: t('importers.title'),
      description: t('importers.description'),
      steps: [t('importers.step1'), t('importers.step2'), t('importers.step3'), t('importers.step4')],
      cta: t('importers.cta'),
      color: "orange"
    }
  ]
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
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

        {/* User Journey Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {userJourneys.map((journey, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-card border-border/50 overflow-hidden relative"
            >
              {/* Color accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-blue"></div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-quantico font-bold text-card-foreground mb-3">
                  {journey.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {journey.description}
                </p>

                {/* Process Steps */}
                <div className="space-y-4 mb-8">
                  {journey.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-primary-blue">
                        {stepIndex + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/book-demo">
                  <Button 
                    variant="primary"
                    className="w-full font-quantico uppercase tracking-wide font-medium"
                  >
                    {journey.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-card rounded-3xl p-12 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-quantico font-bold text-foreground mb-4">
              {t('integration.title')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('integration.description')}
            </p>
          </div>

          {/* Integration Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('integration.connect.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('integration.connect.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('integration.automate.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('integration.automate.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('integration.monitor.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('integration.monitor.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('integration.scale.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('integration.scale.description')}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/book-demo">
              <Button variant="primary" size="lg" className="font-quantico uppercase tracking-wide font-medium">
                {t('integration.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}