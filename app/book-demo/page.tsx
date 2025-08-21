"use client"

import { useEffect } from "react"
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BookDemoPage() {
  useEffect(() => {
    // Load Cal.com script
    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // Initialize Cal.com
      if (typeof window !== "undefined" && (window as any).Cal) {
        const Cal = (window as any).Cal
        Cal("init", "demo-customslens", { origin: "https://app.cal.com" })

        Cal.ns["demo-customslens"]("inline", {
          elementOrSelector: "#my-cal-inline-demo-customslens",
          config: { layout: "month_view" },
          calLink: "leonbotzen/demo-customslens",
        })

        Cal.ns["demo-customslens"]("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#0066FF" },
            dark: { "cal-brand": "#0052CC" }
          },
          hideEventTypeDetails: false,
          layout: "month_view"
        })
      }
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue via-blue-600 to-blue-800">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-quantico uppercase tracking-wide text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-quantico font-bold text-white">CustomsLens</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-white mb-6">
              Book Your Demo
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized demo to see how CustomsLens can transform your Dutch customs operations.
              Our experts will show you real-world scenarios tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 sticky top-6">
                <h3 className="text-xl font-quantico font-bold text-white mb-6">What You'll Learn</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">DV/BFV Automation</div>
                      <div className="text-white/70 text-sm">See how AI processes Dutch customs declarations</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Compliance Validation</div>
                      <div className="text-white/70 text-sm">Real-time checks ensure zero rejections</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Integration Options</div>
                      <div className="text-white/70 text-sm">Connect with your existing systems</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">ROI Calculator</div>
                      <div className="text-white/70 text-sm">Calculate potential time and cost savings</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white font-medium text-sm">Demo Details</span>
                  </div>
                  <div className="text-white/90 text-sm space-y-1">
                    <div>Duration: 30-45 minutes</div>
                    <div>Format: Video call</div>
                    <div>Follow-up: Custom proposal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Embed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div
                  style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
                  id="my-cal-inline-demo-customslens"
                />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm mb-4">
              Join Dutch customs professionals who trust CustomsLens
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="text-xs">🏢 Rotterdam Port Authority</div>
              <div className="text-xs">🚢 Leading Freight Forwarders</div>
              <div className="text-xs">📋 Licensed Customs Brokers</div>
              <div className="text-xs">🏭 Major Importers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}