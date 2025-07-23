import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, Users } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">About FGCI Alumni</h1>

          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
            We are a passionate community of graduates from Federal Government College, Ilorin, united by shared
            memories and a common mission to restore our beloved FCS Church Hall to better than its former glory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Join Our Mission
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                See Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
