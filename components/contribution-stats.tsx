import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, Users, Calendar, TrendingUp, DollarSign, Award } from "lucide-react"

export function ContributionStats() {
  const stats = [
    {
      icon: Target,
      label: "Total Goal",
      value: "₦100M",
      subtext: "Complete restoration fund",
      color: "text-blue-600",
    },
    {
      icon: DollarSign,
      label: "Total Pledged",
      value: "₦54.3M",
      subtext: "54.3% of goal reached",
      color: "text-green-600",
    },
    {
      icon: Users,
      label: "Contributors",
      value: "381",
      subtext: "Alumni from 52 sets",
      color: "text-purple-600",
    },
    {
      icon: Calendar,
      label: "Months Left",
      value: "4",
      subtext: "Until December deadline",
      color: "text-amber-600",
    },
  ]

  const topContributors = [
    { name: "Anonymous Donor", set: "1985", amount: 2000000 },
    { name: "Dr. Adebayo O.", set: "1985", amount: 1500000 },
    { name: "Engr. Chukwuma O.", set: "1978", amount: 1200000 },
    { name: "Prof. Aisha A.", set: "1989", amount: 1000000 },
    { name: "Mrs. Fatima A.", set: "1992", amount: 800000 },
  ]

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
          <CardTitle className="text-xl">Campaign Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-slate-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-700">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">Overall Progress</span>
              <span className="font-semibold">54.3%</span>
            </div>
            <Progress value={54.3} className="h-3" />
            <div className="text-center mt-2 text-sm text-slate-600">₦45.7M remaining by December 2024</div>
          </div>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
          <CardTitle className="text-xl flex items-center gap-2">
            <Award className="w-5 h-5" />
            Top Contributors
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {topContributors.map((contributor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{contributor.name}</div>
                    <div className="text-sm text-slate-600">Class of {contributor.set}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">₦{contributor.amount.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <CardTitle className="text-xl flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">New pledge from Class of 1987</span>
              <span className="text-green-600 font-semibold">₦150,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Payment received from Class of 1992</span>
              <span className="text-blue-600 font-semibold">₦300,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">New contributor from Class of 1995</span>
              <span className="text-purple-600 font-semibold">₦75,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Large donation from Class of 1985</span>
              <span className="text-green-600 font-semibold">₦500,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
