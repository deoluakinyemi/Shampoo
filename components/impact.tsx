import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Calendar, Target } from "lucide-react"

export function Impact() {
  const stats = [
    {
      icon: Target,
      label: "Fundraising Goal",
      value: "₦100,000,000",
      description: "Total needed for complete restoration",
    },
    {
      icon: Users,
      label: "Alumni Sets",
      value: "52 Sets",
      description: "From 1973 to 2024 graduation years",
    },
    {
      icon: Calendar,
      label: "Target Timeline",
      value: "6 Months", // Changed from "12 Months"
      description: "From fundraising to completion",
    },
    {
      icon: TrendingUp,
      label: "Current Progress",
      value: "15%",
      description: "₦15M pledged so far",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Together We Can Rebuild</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Every contribution brings us closer to restoring this sacred space. See how your fellow alumni are making a
            difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-amber-400 mb-2">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Fundraising Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Raised: ₦15,000,000</span>
                  <span>Goal: ₦100,000,000</span>
                </div>
                <Progress value={15} className="h-4" />
                <div className="text-center text-blue-100">
                  <span className="text-2xl font-bold text-amber-400">₦85,000,000</span> remaining to reach our goal
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
