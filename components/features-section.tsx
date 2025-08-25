import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Headphones, ArrowRight } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: FileText,
    title: "DV/BFV Module",
    description: "Automate Direct and Limited Fiscal Representation documents with drag-and-drop templates, real-time validation, and digital signing.",
    benefits: ["80% time reduction", "Zero validation errors", "Complete audit trail"],
    cta: "Learn More"
  },
  {
    icon: Users,
    title: "Customs Requests",
    description: "Transform email-based clearance requests into structured digital workflows with AI-powered invoice extraction.",
    benefits: ["Multi-language support", "Container tracking", "Document management"],
    cta: "Explore Features"
  },
  {
    icon: Headphones,
    title: "Customs-as-a-Service",
    description: "Complete managed service connecting international forwarders to vetted Dutch customs brokers.",
    benefits: ["Broker network access", "Single point of contact", "Managed compliance"],
    cta: "Get Started"
  },
]

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full text-primary-blue text-sm font-medium mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-foreground mb-6">
            Complete Customs Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From document automation to full-service management, CustomsLens offers flexible solutions 
            for every stage of customs clearance in the Netherlands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary-blue/10 rounded-2xl group-hover:bg-primary-blue transition-all duration-300">
                  <solution.icon className="h-8 w-8 text-primary-blue group-hover:text-white transition-colors duration-300" />
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
                  variant="ghost" 
                  className="group/btn text-primary-blue hover:text-primary-blue p-0 h-auto font-quantico uppercase tracking-wide text-sm font-medium"
                >
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works Preview */}
        <div className="text-center bg-gradient-card rounded-3xl p-12 border border-border/50">
          <h3 className="text-2xl sm:text-3xl font-quantico font-bold text-foreground mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join customs professionals across the Netherlands who are already streamlining their clearance processes with CustomsLens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo">
              <Button variant="subtle" size="lg" className="px-8 py-3 font-quantico uppercase tracking-wide text-sm font-medium">
                Request Demo
              </Button>
            </Link>
            <Button variant="subtle-outline" size="lg" className="px-8 py-3 font-quantico uppercase tracking-wide text-sm font-medium">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
