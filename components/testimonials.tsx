import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Adebayo Ogundimu",
      set: "Class of 1985",
      role: "Medical Director",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The FCS Hall was where I first felt called to serve others. It shaped my entire career in medicine. We must preserve this sacred space for future generations.",
      rating: 5,
    },
    {
      name: "Mrs. Fatima Al-Hassan",
      set: "Class of 1992",
      role: "Education Consultant",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Every Sunday in that hall taught me about community, faith, and leadership. The friendships I made there have lasted over 30 years. This is our chance to give back.",
      rating: 5,
    },
    {
      name: "Engr. Chukwuma Okafor",
      set: "Class of 1978",
      role: "Structural Engineer",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I remember my confirmation ceremony in that hall like it was yesterday. The building may be damaged, but the memories and impact are eternal. Let's rebuild it stronger.",
      rating: 5,
    },
    {
      name: "Prof. Aisha Abdullahi",
      set: "Class of 1989",
      role: "University Professor",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The FCS Hall was our sanctuary during those formative years. It's where we learned to pray, to hope, and to believe in something greater than ourselves.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Voices from the Heart</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Alumni share their cherished memories and why rebuilding the FCS Hall matters to them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{testimonial.name}</h3>
                    <p className="text-amber-600 font-semibold">{testimonial.set}</p>
                    <p className="text-slate-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-amber-400 absolute -top-2 -left-2" />
                  <p className="text-slate-700 leading-relaxed pl-6 italic">{testimonial.quote}</p>
                </div>

                <div className="flex items-center gap-1 mt-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
