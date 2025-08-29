import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, UserPlus, Zap, BarChart } from "lucide-react"
import Link from "next/link"

const userJourneys = [
  {
    title: "For Customs Brokers",
    description: "Modernize your practice and attract new clients with digital efficiency",
    steps: [
      { icon: UserPlus, text: "Sign up for CustomsLens SaaS" },
      { icon: Zap, text: "Configure templates and workflows" },
      { icon: BarChart, text: "Invite clients to the platform" },
      { icon: ArrowRight, text: "Process clearances digitally" }
    ],
    cta: "Start Modernizing",
    color: "blue"
  },
  {
    title: "For International Forwarders", 
    description: "Streamline your Dutch operations with confidence and transparency",
    steps: [
      { icon: UserPlus, text: "Choose SaaS or CaaS option" },
      { icon: Zap, text: "Connect with broker network" },
      { icon: BarChart, text: "Submit structured requests" },
      { icon: ArrowRight, text: "Track shipments in real-time" }
    ],
    cta: "Explore Options",
    color: "green"
  },
  {
    title: "For Importers",
    description: "Never face delays from documentation errors again",
    steps: [
      { icon: UserPlus, text: "Receive invitation from your service provider" },
      { icon: Zap, text: "Complete company validation once" },
      { icon: BarChart, text: "Digitally sign documents instantly" },
      { icon: ArrowRight, text: "Access all documentation centrally" }
    ],
    cta: "Get Started",
    color: "orange"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full text-primary-blue text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-foreground mb-6">
            Three Paths to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a customs broker, international forwarder, or importer, 
            CustomsLens provides a tailored journey to transform your customs operations.
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
                        <p className="text-sm text-muted-foreground font-medium">{step.text}</p>
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
              Seamless Integration Process
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From setup to full operation, our onboarding process ensures you're maximizing value from day one.
            </p>
          </div>

          {/* Integration Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">1. Connect</h4>
              <p className="text-sm text-muted-foreground">Link your existing systems or start fresh with CustomsLens</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">2. Automate</h4>
              <p className="text-sm text-muted-foreground">AI handles document processing and validation automatically</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">3. Monitor</h4>
              <p className="text-sm text-muted-foreground">Track all customs activities through real-time dashboards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">4. Scale</h4>
              <p className="text-sm text-muted-foreground">Expand operations with confidence and compliance</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/book-demo">
              <Button variant="primary" size="lg" className="font-quantico uppercase tracking-wide font-medium">
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}