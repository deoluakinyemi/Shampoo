"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, ImageIcon, Trash2, Eye, Edit } from "lucide-react"
import Image from "next/image"

export function ImageManager() {
  const [images, setImages] = useState({
    hero: {
      background: "/placeholder.svg?height=1080&width=1920",
      alt: "FCS Church Hall",
    },
    story: {
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
      altBefore: "FCS Church Hall before damage",
      altAfter: "FCS Church Hall after storm damage",
    },
    testimonials: [
      {
        id: 1,
        image: "/placeholder.svg?height=80&width=80",
        name: "Dr. Adebayo Ogundimu",
        alt: "Dr. Adebayo Ogundimu profile photo",
      },
      {
        id: 2,
        image: "/placeholder.svg?height=80&width=80",
        name: "Mrs. Fatima Al-Hassan",
        alt: "Mrs. Fatima Al-Hassan profile photo",
      },
      {
        id: 3,
        image: "/placeholder.svg?height=80&width=80",
        name: "Engr. Chukwuma Okafor",
        alt: "Engr. Chukwuma Okafor profile photo",
      },
      {
        id: 4,
        image: "/placeholder.svg?height=80&width=80",
        name: "Prof. Aisha Abdullahi",
        alt: "Prof. Aisha Abdullahi profile photo",
      },
    ],
    gallery: [
      {
        id: 1,
        image: "/placeholder.svg?height=300&width=400",
        title: "Hall Interior",
        alt: "Interior view of FCS Church Hall",
      },
      {
        id: 2,
        image: "/placeholder.svg?height=300&width=400",
        title: "Sunday Service",
        alt: "Students during Sunday service",
      },
      {
        id: 3,
        image: "/placeholder.svg?height=300&width=400",
        title: "Fellowship Time",
        alt: "Students in fellowship",
      },
    ],
  })

  const handleImageUpload = (section: string, imageKey?: string) => {
    // In a real app, this would handle file upload
    console.log(`Uploading image for ${section}${imageKey ? ` - ${imageKey}` : ""}`)
  }

  const handleImageDelete = (section: string, id?: number) => {
    // In a real app, this would delete the image
    console.log(`Deleting image from ${section}${id ? ` - ID: ${id}` : ""}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Image Management</CardTitle>
          <p className="text-slate-600">Upload and manage images across your fundraising website.</p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero">Hero Images</TabsTrigger>
          <TabsTrigger value="story">Story Images</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section Background</CardTitle>
              <p className="text-slate-600">Main background image for the hero section.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8">
                <div className="text-center">
                  <Image
                    src={images.hero.background || "/placeholder.svg"}
                    alt={images.hero.alt}
                    width={400}
                    height={200}
                    className="mx-auto rounded-lg mb-4 object-cover"
                  />
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hero-alt">Alt Text</Label>
                      <Input
                        id="hero-alt"
                        value={images.hero.alt}
                        onChange={(e) =>
                          setImages({
                            ...images,
                            hero: { ...images.hero, alt: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div className="flex gap-4 justify-center">
                      <Button onClick={() => handleImageUpload("hero")} className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload New Image
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Eye className="w-4 h-4" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="story">
          <Card>
            <CardHeader>
              <CardTitle>Story Section Images</CardTitle>
              <p className="text-slate-600">Before and after images of the FCS Hall.</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Before Image */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Before Damage Image</h3>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="text-center">
                    <Image
                      src={images.story.before || "/placeholder.svg"}
                      alt={images.story.altBefore}
                      width={300}
                      height={200}
                      className="mx-auto rounded-lg mb-4 object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="before-alt">Alt Text</Label>
                        <Input
                          id="before-alt"
                          value={images.story.altBefore}
                          onChange={(e) =>
                            setImages({
                              ...images,
                              story: { ...images.story, altBefore: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button
                          onClick={() => handleImageUpload("story", "before")}
                          className="flex items-center gap-2"
                        >
                          <Upload className="w-4 h-4" />
                          Upload New
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                          <Eye className="w-4 h-4" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div>
                <h3 className="text-lg font-semibold mb-4">After Damage Image</h3>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="text-center">
                    <Image
                      src={images.story.after || "/placeholder.svg"}
                      alt={images.story.altAfter}
                      width={300}
                      height={200}
                      className="mx-auto rounded-lg mb-4 object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="after-alt">Alt Text</Label>
                        <Input
                          id="after-alt"
                          value={images.story.altAfter}
                          onChange={(e) =>
                            setImages({
                              ...images,
                              story: { ...images.story, altAfter: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button onClick={() => handleImageUpload("story", "after")} className="flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Upload New
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                          <Eye className="w-4 h-4" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle>Testimonial Photos</CardTitle>
              <p className="text-slate-600">Profile photos for alumni testimonials.</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {images.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border rounded-lg p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.alt}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.alt}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor={`testimonial-alt-${testimonial.id}`}>Alt Text</Label>
                        <Input
                          id={`testimonial-alt-${testimonial.id}`}
                          value={testimonial.alt}
                          onChange={(e) => {
                            const updatedTestimonials = images.testimonials.map((t) =>
                              t.id === testimonial.id ? { ...t, alt: e.target.value } : t,
                            )
                            setImages({ ...images, testimonials: updatedTestimonials })
                          }}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleImageUpload("testimonials", testimonial.id.toString())}>
                          <Upload className="w-3 h-3 mr-1" />
                          Upload
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleImageDelete("testimonials", testimonial.id)}
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Add New Testimonial Photo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <Card>
            <CardHeader>
              <CardTitle>Image Gallery</CardTitle>
              <p className="text-slate-600">Additional images for the website gallery.</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {images.gallery.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={150}
                      className="w-full rounded-lg mb-4 object-cover"
                    />
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor={`gallery-title-${item.id}`}>Title</Label>
                        <Input
                          id={`gallery-title-${item.id}`}
                          value={item.title}
                          onChange={(e) => {
                            const updatedGallery = images.gallery.map((g) =>
                              g.id === item.id ? { ...g, title: e.target.value } : g,
                            )
                            setImages({ ...images, gallery: updatedGallery })
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`gallery-alt-${item.id}`}>Alt Text</Label>
                        <Input
                          id={`gallery-alt-${item.id}`}
                          value={item.alt}
                          onChange={(e) => {
                            const updatedGallery = images.gallery.map((g) =>
                              g.id === item.id ? { ...g, alt: e.target.value } : g,
                            )
                            setImages({ ...images, gallery: updatedGallery })
                          }}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleImageUpload("gallery", item.id.toString())}>
                          <Upload className="w-3 h-3 mr-1" />
                          Replace
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleImageDelete("gallery", item.id)}>
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Add New Gallery Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
