"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Share2, Calendar } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  const handleShareCampaign = () => {
    const campaignUrl = window.location.origin // Gets the base URL of the deployed site

    if (navigator.share) {
      // Use Web Share API if available
      navigator
        .share({
          title: "Help Rebuild FCS Church Hall - FGCI Alumni",
          text: "Join me in supporting the rebuilding of our beloved FCS Church Hall at Federal Government College, Ilorin. Every contribution helps!",
          url: campaignUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error))
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText(campaignUrl)
        .then(() => alert("Campaign link copied to clipboard! Share it with your network."))
        .catch((error) => console.error("Failed to copy:", error))
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Fellowship Needs You</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            We all passed through this fellowship. Now let's help it stand tall again. Every contribution, no matter the
            size, brings us closer to our goal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Make Your Pledge</h3>
              <p className="text-blue-100 mb-6">Choose your contribution amount and payment plan that works for you.</p>
              <Link href="/donate">
                <Button className="bg-amber-600 hover:bg-amber-700 w-full">Donate Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Rally Your Set</h3>
              <p className="text-blue-100 mb-6">
                See how your graduation set is performing and encourage classmates to join.
              </p>
              <Link href="/leaderboard">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 w-full bg-transparent"
                >
                  View Leaderboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Share2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Spread the Word</h3>
              <p className="text-blue-100 mb-6">
                Share this campaign with your fellow alumni on WhatsApp and social media.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 w-full bg-transparent"
                onClick={handleShareCampaign} // Added onClick handler
              >
                Share Campaign
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold mb-4">
            <Calendar className="w-5 h-5" />
            <span>Campaign Deadline: December 31, 2024</span>
          </div>
          <p className="text-blue-100">
            Time is of the essence. The longer we wait, the more expensive repairs become.
          </p>
        </div>
      </div>
    </section>
  )
}
