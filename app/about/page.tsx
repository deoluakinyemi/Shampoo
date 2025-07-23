import { AboutHero } from "@/components/about/about-hero"
import { AlumniStory } from "@/components/about/alumni-story"
import { OurMission } from "@/components/about/our-mission"
import { AlumniImpact } from "@/components/about/alumni-impact"
import { Leadership } from "@/components/about/leadership"
import { JoinUs } from "@/components/about/join-us"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AlumniStory />
      <OurMission />
      <AlumniImpact />
      <Leadership />
      <JoinUs />
    </div>
  )
}
