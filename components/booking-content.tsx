"use client"

import { useEffect } from "react"
import { Clock, CheckCircle, Calendar, Users, Zap } from "lucide-react"

declare global {
  interface Window {
    Cal: any
  }
}

export function BookingContent() {
  useEffect(() => {
    // Cal.com inline embed code
    (function (C: any, A: any, L: any) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          (api as any).q = (api as any).q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    window.Cal("init", "demo-customslens", {origin:"https://app.cal.com"});

    window.Cal.ns["demo-customslens"]("inline", {
      elementOrSelector:"#my-cal-inline-demo-customslens",
      config: {"layout":"month_view","theme":"light"},
      calLink: "leonbotzen/demo-customslens",
    });

    window.Cal.ns["demo-customslens"]("ui", {
      "theme":"light",
      "cssVarsPerTheme":{
        "light":{"cal-brand":"#0066FF"},
        "dark":{"cal-brand":"#0052CC"}
      },
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  }, [])

  return (
    <section className="pt-20 pb-24 gradient-hero min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-white mb-6 mt-12">
              See CustomsLens in Action
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized demo to see how CustomsLens can transform your Dutch customs operations.
              Our experts will show you real-world scenarios tailored to your business needs.
            </p>
          </div>

          {/* Calendar Embed - Full Width */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 text-primary-blue" />
                <h2 className="text-xl font-quantico font-bold text-gray-900">Choose Your Preferred Time</h2>
              </div>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Select a time that works best for your schedule • 30-45 minute video call
              </p>
            </div>
            
            {/* Cal.com embed container - MUST have this exact ID */}
            <div
              style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "scroll" }}
              id="my-cal-inline-demo-customslens"
              className="bg-white"
            />
          </div>

          {/* Key Benefits - Compact version below calendar */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-6 h-6 text-white" />
                <h3 className="font-quantico font-semibold text-white">Expert Guidance</h3>
              </div>
              <p className="text-white/80 text-sm">
                Our Dutch customs specialists will guide you through the platform tailored to your needs
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-6 h-6 text-white" />
                <h3 className="font-quantico font-semibold text-white">Instant Setup</h3>
              </div>
              <p className="text-white/80 text-sm">
                Get started in days, not months with our streamlined onboarding process
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <h3 className="font-quantico font-semibold text-white">Guaranteed Results</h3>
              </div>
              <p className="text-white/80 text-sm">
                100% compliance guarantee with 80% faster processing times
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm mb-4">
              Join Dutch customs professionals who trust CustomsLens
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-xs">
              <div className="flex items-center space-x-2">
                <span>🏢</span>
                <span>Rotterdam Port Authority</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚢</span>
                <span>Leading Freight Forwarders</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📋</span>
                <span>Licensed Customs Brokers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏭</span>
                <span>Major Importers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}