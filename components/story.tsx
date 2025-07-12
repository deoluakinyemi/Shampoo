import { Card, CardContent } from "@/components/ui/card"
import { Church, Heart, Users, Zap } from "lucide-react"
import Image from "next/image"

export function Story() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">A Sacred Space in Crisis</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            For over five decades, the FCS Church Hall has been the spiritual heartbeat of Federal Government College,
            Ilorin. It's where countless students found their faith, built lifelong friendships, and discovered their
            purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="FCS Church Hall before damage"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">The Heart of Our Fellowship</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Every Sunday morning, Wednesday evening, and special occasion, this hall echoed with prayers, songs, and
              testimonies. It witnessed baptisms, confirmations, and countless moments of spiritual transformation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Church className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700">Weekly worship services since 1973</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700">Thousands of students impacted</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700">Center of spiritual growth and community</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">The Storm That Changed Everything</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A devastating storm recently tore through our beloved campus, leaving the FCS Church Hall severely
              damaged. The roof was torn away, walls cracked, and the interior suffered extensive water damage. Our
              sacred space now stands vulnerable and in desperate need of restoration.
            </p>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-red-800">Critical Damage Assessment</span>
                </div>
                <ul className="space-y-2 text-red-700">
                  <li>• Complete roof replacement needed</li>
                  <li>• Major structural repairs required</li>
                  <li>• Interior restoration and refurbishment</li>
                  <li>• Electrical and sound system replacement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="FCS Church Hall after storm damage"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
