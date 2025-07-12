import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <Impact />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
