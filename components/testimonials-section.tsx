"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useTranslations } from 'next-intl'

export function TestimonialsSection() {
  const t = useTranslations('Testimonials')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: t('testimonial1.author'),
      role: t('testimonial1.role'),
      company: t('testimonial1.company'),
      content: t('testimonial1.quote'),
      rating: 5,
      avatar: "/professional-man-headshot.png",
    },
    {
      name: t('testimonial2.author'),
      role: t('testimonial2.role'),
      company: t('testimonial2.company'),
      content: t('testimonial2.quote'),
      rating: 5,
      avatar: "/latina-professional-headshot.png",
    },
    {
      name: t('testimonial3.author'),
      role: t('testimonial3.role'),
      company: t('testimonial3.company'),
      content: t('testimonial3.quote'),
      rating: 5,
      avatar: "/professional-woman-headshot.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full text-primary-blue text-sm font-medium mb-4">
            {t('title')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-foreground mb-4">
            {t('subtitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-border">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="!h-10 !w-10">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="!h-10 !w-10">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
