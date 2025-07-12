import { SetLeaderboard } from "@/components/set-leaderboard"
import { ContributionStats } from "@/components/contribution-stats"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Alumni Set Leaderboard</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how each graduation set is contributing to rebuild our beloved FCS Church Hall. Every contribution
              counts toward our collective goal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SetLeaderboard />
            </div>
            <div>
              <ContributionStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
