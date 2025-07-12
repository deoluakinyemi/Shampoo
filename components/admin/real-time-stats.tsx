"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, TrendingUp, Calendar } from "lucide-react"

export function RealTimeStats() {
  const [stats, setStats] = useState({
    totalAmount: 0,
    totalContributors: 0,
    completionRate: 0,
    paidCount: 0,
    partialCount: 0,
    pledgedCount: 0,
  })
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/donations/stats")
      const result = await response.json()

      if (result.success) {
        setStats(result.stats)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()

    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const statsData = [
    {
      title: "Total Donations",
      value: `₦${stats.totalAmount.toLocaleString()}`,
      change: `${stats.totalContributors} contributors`,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Contributors",
      value: stats.totalContributors.toString(),
      change: `${stats.paidCount} paid, ${stats.partialCount} partial`,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Completion Rate",
      value: `${stats.completionRate}%`,
      change: "of ₦100M goal",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Pending Follow-up",
      value: stats.pledgedCount.toString(),
      change: "pledged donations",
      icon: Calendar,
      color: "text-amber-600",
    },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className={`text-sm ${stat.color}`}>{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full bg-slate-100 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
