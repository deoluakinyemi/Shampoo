import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Users, Award } from "lucide-react"

export function OurMission() {
  const missions = [
    {
      icon: Target,
      title: "Restore & Rebuild",
      description:
        "Completely restore the FCS Church Hall to better than its former glory, with modern facilities while preserving its spiritual essence.",
      color: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Strengthen Community",
      description: "Reconnect alumni across generations and create lasting bonds that extend beyond our school years.",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Support Future Generations",
      description:
        "Ensure current and future FGCI students have a beautiful, functional space for worship and spiritual growth.",
      color: "text-purple-600",
    },
    {
      icon: Award,
      title: "Honor Our Heritage",
      description:
        "Preserve the legacy and traditions that made FGCI special while creating new memories for generations to come.",
      color: "text-amber-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Mission</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We're not just rebuilding a building—we're restoring the heart of our alma mater and ensuring that future
            generations of students have an even better space for worship, fellowship, and spiritual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div
                  className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6 ${mission.color}`}
                >
                  <mission.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{mission.title}</h3>
                <p className="text-slate-600 leading-relaxed">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Better Than Before</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our vision goes beyond simple restoration. We're committed to creating a modern, accessible, and inspiring
              space that honors our past while embracing the future. The new FCS Church Hall will feature:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Modern sound and lighting systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Climate control for year-round comfort</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Accessibility features for all students</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-700">Enhanced seating capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-700">Multi-purpose functionality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-700">Sustainable, eco-friendly design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
