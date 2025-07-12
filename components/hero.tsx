import { Button } from "@/components/ui/button"
import { Heart, Users, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="FCS Church Hall"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rebuild Our Sacred
            <span className="block text-amber-400">Fellowship Hall</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            The FCS Church Hall at Federal Government College, Ilorin needs our help. Where we found faith, fellowship,
            and purpose—now needs us to stand tall again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-amber-400">
              <Target className="w-6 h-6" />
              <span className="text-lg font-semibold">Goal: ₦100 Million</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Users className="w-6 h-6" />
              <span className="text-lg font-semibold">Alumni Sets 1973-2024</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Make Your Pledge
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                View Progress
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
