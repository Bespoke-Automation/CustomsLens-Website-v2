import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-12rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.18),transparent)] opacity-80 blur-3xl" />
        <div className="absolute top-[35vh] left-[8%] h-[32rem] w-[32rem] bg-[radial-gradient(circle_farthest-side,rgba(14,116,144,0.16),transparent)] opacity-70 blur-3xl" />
        <div className="absolute top-[85vh] right-[5%] h-[34rem] w-[34rem] bg-[radial-gradient(circle_farthest-side,rgba(99,102,241,0.15),transparent)] opacity-70 blur-3xl" />
        <div className="absolute top-[135vh] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 bg-[radial-gradient(circle_farthest-side,rgba(30,64,175,0.12),transparent)] opacity-70 blur-3xl" />
      </div>

      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
