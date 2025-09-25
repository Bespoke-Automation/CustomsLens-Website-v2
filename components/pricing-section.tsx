"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useTranslations } from 'next-intl'

export function PricingSection() {
  const t = useTranslations('Pricing')
  
  const plans = [
    {
      name: t('starter.name'),
      price: t('starter.price'),
      period: t('starter.period'),
      description: t('starter.description'),
      features: t('starter.features', { returnObjects: true }) as string[],
      popular: false,
    },
    {
      name: t('professional.name'),
      price: t('professional.price'),
      period: t('professional.period'),
      description: t('professional.description'),
      features: t('professional.features', { returnObjects: true }) as string[],
      popular: true,
    },
    {
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      period: t('enterprise.period'),
      description: t('enterprise.description'),
      features: t('enterprise.features', { returnObjects: true }) as string[],
      popular: false,
    },
  ]
  return (
    <section id="pricing" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5rem] top-[-4rem] h-72 w-72 rounded-full bg-[rgba(59,130,246,0.1)] blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-3rem] h-80 w-80 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-quantico font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border bg-white/95 shadow-sm backdrop-blur-sm ${
                plan.popular
                  ? "border-blue-200 ring-1 ring-primary-blue/40"
                  : "border-blue-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                    {t('professional.popular')}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-quantico font-bold text-card-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "primary-outline"}
                  className="w-full font-quantico uppercase tracking-wide"
                >
                  {index === 2 ? t('enterprise.cta') : t('starter.cta')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution?{" "}
            <a href="#contact" className="text-primary-blue hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
