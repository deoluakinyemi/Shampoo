import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Target } from "lucide-react"

export function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Leadership</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            This campaign is led by a dedicated committee of alumni volunteers from various graduation sets, united by
            our shared love for FGCI and commitment to this cause.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Volunteer-Led</h3>
              <p className="text-slate-600 leading-relaxed">
                Our campaign is entirely volunteer-driven, with alumni from different sets contributing their time,
                expertise, and passion to make this vision a reality.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Passion-Driven</h3>
              <p className="text-slate-600 leading-relaxed">
                Every member of our leadership team is motivated by genuine love for FGCI and a desire to preserve its
                legacy for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Results-Focused</h3>
              <p className="text-slate-600 leading-relaxed">
                We're committed to transparency, accountability, and achieving our goal of rebuilding the FCS Church
                Hall to the highest standards.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Transparency & Accountability</h3>
            <p className="text-xl text-blue-100 leading-relaxed mb-6">
              We believe in complete transparency throughout this campaign. Regular updates on our progress, detailed
              financial reports, and open communication ensure that every contributor knows exactly how their donation
              is being used.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-blue-100">Transparent</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-2">Regular</div>
                <div className="text-blue-100">Updates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-2">Full</div>
                <div className="text-blue-100">Accountability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
