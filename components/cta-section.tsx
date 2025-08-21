import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contact" className="py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-white mb-6">
            Transform Your Customs Operations Today
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join Dutch customs professionals who are already streamlining their clearance processes. 
            Experience the power of AI-driven automation and real-time compliance validation.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/book-demo">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90 px-8 py-4 font-quantico uppercase tracking-wide text-sm font-semibold shadow-lg">
                Request Personalized Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-quantico uppercase tracking-wide text-sm font-medium"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">Setup in days, not months</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">80% faster processing</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">100% compliance guarantee</span>
            </div>
          </div>

          <div className="text-white/70 text-sm">
            <p>Ready to get started? • Free consultation • Tailored to your needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
