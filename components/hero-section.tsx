import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import WorldMap from "@/components/ui/world-map"
import Link from "next/link"

export function HeroSection() {
  // Global connections TO Netherlands (goods flowing in for customs clearance)
  const connections = [
    {
      start: { lat: 40.7128, lng: -74.0060, label: "New York" }, // USA
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }, // Japan
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: 51.5074, lng: -0.1278, label: "London" }, // UK
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: 39.9042, lng: 116.4074, label: "Beijing" }, // China
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: -33.8688, lng: 151.2093, label: "Sydney" }, // Australia
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-20">
      {/* Animated World Map Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-full h-full flex items-center justify-center">
          <WorldMap dots={connections} lineColor="#00d4ff" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
              🇳🇱 Netherlands Customs Specialists
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-quantico font-bold text-white mb-6 leading-tight">
            Streamline Customs
            <span className="block text-transparent bg-gradient-to-r from-white to-white/70 bg-clip-text">
              Clearance in the Netherlands
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-manrope">
            AI-powered platform transforming how customs brokers, forwarders, and importers navigate Dutch customs with 
            <span className="font-semibold text-white"> unprecedented speed and compliance</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/book-demo">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90 px-8 py-4 font-quantico uppercase tracking-wide text-sm font-semibold shadow-lg">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-quantico uppercase tracking-wide text-sm font-medium">
              <Play className="mr-2 h-5 w-5" />
              See Solutions
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <div className="text-white/90 font-medium">Faster Processing</div>
              <div className="text-sm text-white/70 mt-2">Automated document handling eliminates manual errors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90 font-medium">Compliance</div>
              <div className="text-sm text-white/70 mt-2">Real-time validation ensures zero rejections</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90 font-medium">Visibility</div>
              <div className="text-sm text-white/70 mt-2">Track every shipment from request to clearance</div>
            </div>
          </div>

          <div className="mt-16 text-white/70">
            <p className="text-sm">Join Dutch customs professionals already transforming their operations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
