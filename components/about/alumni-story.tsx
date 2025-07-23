import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Users, Star } from "lucide-react"

export function AlumniStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Story</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            From 1973 to 2024, over five decades of students have walked through the halls of Federal Government
            College, Ilorin. We are their legacy—a diverse community of professionals, leaders, and change-makers who
            share an unbreakable bond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Where It All Began</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Federal Government College, Ilorin has been more than just a school—it's been a home, a community, and a
              foundation for thousands of young minds. At the heart of this institution stood the FCS Church Hall, a
              sacred space where we gathered every Sunday morning for worship, fellowship, and spiritual growth.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In that hall, we learned the values that would guide us through life: integrity, service, excellence, and
              faith. It's where friendships were forged, where we found our calling, and where many of us experienced
              life-changing moments of spiritual transformation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700">52 graduation sets (1973-2024)</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700">Thousands of alumni worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700">One shared mission: Restore our hall</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-blue-800 mb-3">Our Foundation</h4>
                <p className="text-blue-700">
                  The values instilled in us at FGCI—excellence, integrity, and service—continue to guide us as we work
                  together to rebuild what was once the spiritual center of our school community.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="text-xl font-bold text-amber-800 mb-3">Our Bond</h4>
                <p className="text-amber-700">
                  Despite graduating in different years and pursuing different paths, we remain connected by the shared
                  experiences and memories that shaped us during our formative years at FGCI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">A Legacy of Excellence</h3>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Today, FGCI alumni can be found in every sector of society—doctors, engineers, teachers, business leaders,
            public servants, and entrepreneurs. We carry the FGCI spirit wherever we go, and now we're coming together
            to give back to the place that gave us so much.
          </p>
        </div>
      </div>
    </section>
  )
}
