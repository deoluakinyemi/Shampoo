import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Share2, Mail } from "lucide-react"
import Link from "next/link"

export function JoinUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Join Our Mission</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Whether you graduated in 1973 or 2024, whether you're in Nigeria or abroad, you're part of the FGCI family.
            Together, we can restore our Church Hall and create something even more beautiful for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Donate</h3>
              <p className="text-sm text-slate-600 mb-4">Make a financial contribution to the rebuilding effort.</p>
              <Link href="/donate">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Contribute
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Rally Your Set</h3>
              <p className="text-sm text-slate-600 mb-4">Encourage your classmates to join the campaign.</p>
              <Link href="/leaderboard">
                <Button size="sm" variant="outline" className="bg-transparent">
                  View Sets
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Share</h3>
              <p className="text-sm text-slate-600 mb-4">Spread the word on social media and WhatsApp.</p>
              <Button size="sm" variant="outline" className="bg-transparent">
                Share Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Stay Updated</h3>
              <p className="text-sm text-slate-600 mb-4">Get regular updates on our progress.</p>
              <Button size="sm" variant="outline" className="bg-transparent">
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Every Contribution Matters</h3>
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            No matter the size of your contribution—whether it's ₦5,000 or ₦5,000,000—every donation brings us closer to
            our goal. Together, we're not just rebuilding a building; we're restoring the heart of our alma mater.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Make Your Pledge Today
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 bg-transparent"
              >
                Learn More About the Campaign
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
