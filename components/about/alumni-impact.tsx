import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Briefcase, GraduationCap } from "lucide-react"

export function AlumniImpact() {
  const impactStats = [
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "FGCI alumni making impact worldwide",
    },
    {
      icon: Briefcase,
      number: "1000+",
      label: "Professionals",
      description: "Leading in various industries",
    },
    {
      icon: GraduationCap,
      number: "52",
      label: "Graduation Sets",
      description: "Five decades of excellence",
    },
    {
      icon: TrendingUp,
      number: "₦100M",
      label: "Goal",
      description: "United for one mission",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Alumni Impact</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            FGCI alumni have gone on to make significant contributions across the globe. Now, we're channeling that same
            spirit of excellence toward rebuilding our spiritual home.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-600 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Making a Difference Worldwide</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              From the boardrooms of multinational corporations to the classrooms of rural schools, from hospitals
              saving lives to laboratories making breakthrough discoveries, FGCI alumni are making their mark across
              every continent.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our alumni include CEOs, doctors, engineers, teachers, artists, public servants, entrepreneurs, and
              leaders in every field imaginable. What unites us all is the foundation we received at FGCI and the
              memories we share of that special place.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium italic">
                "The values we learned at FGCI—integrity, excellence, and service—have guided us throughout our careers.
                Now it's time to give back to the place that gave us so much."
              </p>
              <p className="text-blue-600 text-sm mt-2">— FGCI Alumni Community</p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-green-800 mb-3">Healthcare Heroes</h4>
                <p className="text-green-700">
                  FGCI alumni doctors and nurses are saving lives in hospitals across Nigeria, Africa, and around the
                  world, bringing healing and hope to communities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-purple-800 mb-3">Education Leaders</h4>
                <p className="text-purple-700">
                  From university professors to primary school teachers, our alumni are shaping the next generation of
                  leaders and thinkers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-amber-800 mb-3">Innovation Pioneers</h4>
                <p className="text-amber-700">
                  FGCI engineers and entrepreneurs are building the future, creating solutions that improve lives and
                  drive economic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
