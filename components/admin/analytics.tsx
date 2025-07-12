"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, DollarSign, Target, Clock, Award } from "lucide-react"

export function Analytics() {
  // Mock analytics data
  const recentActivity = [
    {
      type: "donation",
      message: "New ₦500,000 pledge from Class of 1985",
      time: "2 hours ago",
      amount: 500000,
    },
    {
      type: "payment",
      message: "Payment received from Dr. Adebayo O.",
      time: "4 hours ago",
      amount: 300000,
    },
    {
      type: "registration",
      message: "New contributor from Class of 1992",
      time: "6 hours ago",
      amount: 0,
    },
    {
      type: "milestone",
      message: "50% funding milestone reached!",
      time: "1 day ago",
      amount: 0,
    },
  ]

  const setPerformance = [
    { set: "1985", pledged: 8500000, paid: 6200000, contributors: 45, percentage: 85 },
    { set: "1992", pledged: 7800000, paid: 5900000, contributors: 38, percentage: 78 },
    { set: "1978", pledged: 7200000, paid: 5400000, contributors: 32, percentage: 72 },
    { set: "1989", pledged: 6900000, paid: 4800000, contributors: 41, percentage: 69 },
    { set: "1995", pledged: 6500000, paid: 4200000, contributors: 35, percentage: 65 },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "donation":
        return <DollarSign className="w-4 h-4 text-green-600" />
      case "payment":
        return <Target className="w-4 h-4 text-blue-600" />
      case "registration":
        return <Users className="w-4 h-4 text-purple-600" />
      case "milestone":
        return <Award className="w-4 h-4 text-amber-600" />
      default:
        return <Clock className="w-4 h-4 text-slate-600" />
    }
  }

  const getActivityBadge = (type: string) => {
    switch (type) {
      case "donation":
        return <Badge className="bg-green-100 text-green-800">Pledge</Badge>
      case "payment":
        return <Badge className="bg-blue-100 text-blue-800">Payment</Badge>
      case "registration":
        return <Badge className="bg-purple-100 text-purple-800">New User</Badge>
      case "milestone":
        return <Badge className="bg-amber-100 text-amber-800">Milestone</Badge>
      default:
        return <Badge className="bg-slate-100 text-slate-800">Activity</Badge>
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 bg-slate-100 rounded-full">{getActivityIcon(activity.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getActivityBadge(activity.type)}
                    <span className="text-sm text-slate-600">{activity.time}</span>
                  </div>
                  <p className="text-slate-800 font-medium">{activity.message}</p>
                  {activity.amount > 0 && (
                    <p className="text-green-600 font-semibold">₦{activity.amount.toLocaleString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Sets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Top Performing Sets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {setPerformance.map((set, index) => (
              <div key={set.set} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold">Class of {set.set}</div>
                      <div className="text-sm text-slate-600">{set.contributors} contributors</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">₦{set.pledged.toLocaleString()}</div>
                    <div className="text-sm text-slate-600">{set.percentage}% complete</div>
                  </div>
                </div>
                <Progress value={set.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
