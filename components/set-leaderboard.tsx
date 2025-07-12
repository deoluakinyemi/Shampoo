import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Users, TrendingUp } from "lucide-react"

export function SetLeaderboard() {
  // Mock data - in real app, this would come from your backend
  const setData = [
    {
      set: "1985",
      totalPledged: 8500000,
      totalPaid: 6200000,
      contributors: 45,
      percentage: 85,
      rank: 1,
    },
    {
      set: "1992",
      totalPledged: 7800000,
      totalPaid: 5900000,
      contributors: 38,
      percentage: 78,
      rank: 2,
    },
    {
      set: "1978",
      totalPledged: 7200000,
      totalPaid: 5400000,
      contributors: 32,
      percentage: 72,
      rank: 3,
    },
    {
      set: "1989",
      totalPledged: 6900000,
      totalPaid: 4800000,
      contributors: 41,
      percentage: 69,
      rank: 4,
    },
    {
      set: "1995",
      totalPledged: 6500000,
      totalPaid: 4200000,
      contributors: 35,
      percentage: 65,
      rank: 5,
    },
    {
      set: "2001",
      totalPledged: 6100000,
      totalPaid: 3900000,
      contributors: 28,
      percentage: 61,
      rank: 6,
    },
    {
      set: "1987",
      totalPledged: 5800000,
      totalPaid: 3600000,
      contributors: 33,
      percentage: 58,
      rank: 7,
    },
    {
      set: "2010",
      totalPledged: 5500000,
      totalPaid: 3300000,
      contributors: 29,
      percentage: 55,
      rank: 8,
    },
    {
      set: "2015",
      totalPledged: 5200000,
      totalPaid: 3100000,
      contributors: 25,
      percentage: 52,
      rank: 9,
    },
    {
      set: "2020",
      totalPledged: 4800000,
      totalPaid: 2900000,
      contributors: 22,
      percentage: 48,
      rank: 10,
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return (
          <div className="w-6 h-6 flex items-center justify-center bg-slate-200 rounded-full text-sm font-bold text-slate-600">
            {rank}
          </div>
        )
    }
  }

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Badge className="bg-yellow-500 text-white">🏆 Champion</Badge>
      case 2:
        return <Badge className="bg-gray-400 text-white">🥈 Runner-up</Badge>
      case 3:
        return <Badge className="bg-amber-600 text-white">🥉 Third Place</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="text-2xl flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Set Performance Rankings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {setData.map((set, index) => (
            <div
              key={set.set}
              className={`p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                index < 3 ? "bg-gradient-to-r from-amber-50 to-transparent" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  {getRankIcon(set.rank)}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Class of {set.set}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>{set.contributors} contributors</span>
                    </div>
                  </div>
                </div>
                {getRankBadge(set.rank)}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Progress</span>
                  <span className="font-semibold text-slate-800">{set.percentage}%</span>
                </div>
                <Progress value={set.percentage} className="h-3" />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Total Pledged:</span>
                    <div className="font-bold text-blue-600">₦{set.totalPledged.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-slate-600">Amount Paid:</span>
                    <div className="font-bold text-green-600">₦{set.totalPaid.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
