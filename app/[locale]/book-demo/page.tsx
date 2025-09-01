import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingContent } from "@/components/booking-content"

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BookingContent />
      <Footer />
    </main>
  )
}