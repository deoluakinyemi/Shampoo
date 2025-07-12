"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, Share2, ArrowRight, Home, BarChart3 } from "lucide-react"

export function SuccessPage() {
  const searchParams = useSearchParams()
  const [donorName, setDonorName] = useState("")
  const [donationAmount, setDonationAmount] = useState("")
  const [graduationSet, setGraduationSet] = useState("")

  useEffect(() => {
    // Get data from URL parameters if available
    const name = searchParams.get("name")
    const amount = searchParams.get("amount")
    const set = searchParams.get("set")

    if (name) setDonorName(name)
    if (amount) setDonationAmount(amount)
    if (set) setGraduationSet(set)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Thank You for Your Generous Pledge!</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your commitment to rebuilding the FCS Church Hall has been successfully recorded. Together, we're making
              this restoration possible.
            </p>
          </div>

          {/* Donation Summary Card */}
          <Card className="mb-8 shadow-lg border-green-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Pledge Summary</h2>
                {donorName && (
                  <p className="text-lg text-slate-600 mb-2">
                    <strong>Donor:</strong> {donorName}
                  </p>
                )}
                {graduationSet && (
                  <p className="text-lg text-slate-600 mb-2">
                    <strong>Graduation Set:</strong> Class of {graduationSet}
                  </p>
                )}
                {donationAmount && (
                  <p className="text-lg text-slate-600 mb-4">
                    <strong>Pledge Amount:</strong> ₦{Number.parseInt(donationAmount).toLocaleString()}
                  </p>
                )}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">What Happens Next?</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• You'll receive a confirmation email with your pledge details</li>
                      <li>• Our team will contact you regarding payment arrangements</li>
                      <li>• You'll get regular updates on the campaign progress</li>
                      <li>• Your contribution will be reflected on the leaderboard (unless anonymous)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Track Progress</h3>
                <p className="text-slate-600 mb-4">
                  See how your set is performing and view overall campaign progress.
                </p>
                <Link href="/leaderboard">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Leaderboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Rally Your Set</h3>
                <p className="text-slate-600 mb-4">Encourage your classmates to join the campaign and contribute.</p>
                <Link href="/leaderboard">
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    See Set Rankings
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Spread the Word</h3>
                <p className="text-slate-600 mb-4">Share this campaign with fellow alumni on social media.</p>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Help Rebuild FCS Church Hall - FGCI Alumni",
                        text: "Join me in supporting the rebuilding of our beloved FCS Church Hall at Federal Government College, Ilorin.",
                        url: window.location.origin,
                      })
                    } else {
                      // Fallback for browsers that don't support Web Share API
                      navigator.clipboard.writeText(window.location.origin)
                      alert("Campaign link copied to clipboard!")
                    }
                  }}
                >
                  Share Campaign
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Impact Message */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h2 className="text-2xl font-bold mb-4">Your Impact Matters</h2>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Every pledge brings us closer to our goal of ₦100 million. The FCS Church Hall has been a sacred space
                for generations of students, and with your help, it will continue to be a place of worship, fellowship,
                and spiritual growth for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Return to Home
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    <Heart className="w-5 h-5 mr-2" />
                    Make Another Pledge
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-slate-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Need Help or Have Questions?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-slate-600">
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>fgci.alumni@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+234 803 123 4567</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  Our team is here to assist you with any questions about your pledge or the campaign.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
