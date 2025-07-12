"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, RefreshCw, Eye } from "lucide-react"

export function ContentManager() {
  const [heroContent, setHeroContent] = useState({
    title: "Rebuild Our Sacred",
    subtitle: "Fellowship Hall",
    description:
      "The FCS Church Hall at Federal Government College, Ilorin needs our help. Where we found faith, fellowship, and purpose—now needs us to stand tall again.",
    goal: "₦100 Million",
    targetAudience: "Alumni Sets 1973-2024",
  })

  const [storyContent, setStoryContent] = useState({
    title: "A Sacred Space in Crisis",
    description:
      "For over five decades, the FCS Church Hall has been the spiritual heartbeat of Federal Government College, Ilorin. It's where countless students found their faith, built lifelong friendships, and discovered their purpose.",
    heartTitle: "The Heart of Our Fellowship",
    heartDescription:
      "Every Sunday morning, Wednesday evening, and special occasion, this hall echoed with prayers, songs, and testimonies. It witnessed baptisms, confirmations, and countless moments of spiritual transformation.",
    stormTitle: "The Storm That Changed Everything",
    stormDescription:
      "A devastating storm recently tore through our beloved campus, leaving the FCS Church Hall severely damaged. The roof was torn away, walls cracked, and the interior suffered extensive water damage. Our sacred space now stands vulnerable and in desperate need of restoration.",
  })

  const [impactContent, setImpactContent] = useState({
    title: "Together We Can Rebuild",
    description:
      "Every contribution brings us closer to restoring this sacred space. See how your fellow alumni are making a difference.",
    goal: "₦100,000,000",
    sets: "52 Sets",
    timeline: "6 Months (July-December)",
    progress: "15%",
  })

  const [ctaContent, setCtaContent] = useState({
    title: "Your Fellowship Needs You",
    description:
      "We all passed through this fellowship. Now let's help it stand tall again. Every contribution, no matter the size, brings us closer to our goal.",
    deadline: "December 31, 2024",
    urgencyMessage: "Time is of the essence. We have only 6 months to reach our goal before the December deadline.",
  })

  const handleSave = (section: string) => {
    // In a real app, this would save to your backend
    console.log(`Saving ${section} content...`)
    // Show success message
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Website Content Management</CardTitle>
          <p className="text-slate-600">Update the text content across your fundraising website.</p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="story">Story Section</TabsTrigger>
          <TabsTrigger value="impact">Impact Section</TabsTrigger>
          <TabsTrigger value="cta">Call to Action</TabsTrigger>
        </TabsList>

        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section Content</CardTitle>
              <p className="text-slate-600">Main headline and description that visitors see first.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hero-title">Main Title</Label>
                  <Input
                    id="hero-title"
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Input
                    id="hero-subtitle"
                    value={heroContent.subtitle}
                    onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  value={heroContent.description}
                  onChange={(e) => setHeroContent({ ...heroContent, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hero-goal">Fundraising Goal</Label>
                  <Input
                    id="hero-goal"
                    value={heroContent.goal}
                    onChange={(e) => setHeroContent({ ...heroContent, goal: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-audience">Target Audience</Label>
                  <Input
                    id="hero-audience"
                    value={heroContent.targetAudience}
                    onChange={(e) => setHeroContent({ ...heroContent, targetAudience: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("hero")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="story">
          <Card>
            <CardHeader>
              <CardTitle>Story Section Content</CardTitle>
              <p className="text-slate-600">Tell the emotional story of the FCS Hall and the damage.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="story-title">Section Title</Label>
                <Input
                  id="story-title"
                  value={storyContent.title}
                  onChange={(e) => setStoryContent({ ...storyContent, title: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="story-description">Section Description</Label>
                <Textarea
                  id="story-description"
                  value={storyContent.description}
                  onChange={(e) => setStoryContent({ ...storyContent, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="heart-title">Heart of Fellowship Title</Label>
                <Input
                  id="heart-title"
                  value={storyContent.heartTitle}
                  onChange={(e) => setStoryContent({ ...storyContent, heartTitle: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="heart-description">Heart of Fellowship Description</Label>
                <Textarea
                  id="heart-description"
                  value={storyContent.heartDescription}
                  onChange={(e) => setStoryContent({ ...storyContent, heartDescription: e.target.value })}
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="storm-title">Storm Section Title</Label>
                <Input
                  id="storm-title"
                  value={storyContent.stormTitle}
                  onChange={(e) => setStoryContent({ ...storyContent, stormTitle: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="storm-description">Storm Section Description</Label>
                <Textarea
                  id="storm-description"
                  value={storyContent.stormDescription}
                  onChange={(e) => setStoryContent({ ...storyContent, stormDescription: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("story")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact">
          <Card>
            <CardHeader>
              <CardTitle>Impact Section Content</CardTitle>
              <p className="text-slate-600">Statistics and progress information.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="impact-title">Section Title</Label>
                <Input
                  id="impact-title"
                  value={impactContent.title}
                  onChange={(e) => setImpactContent({ ...impactContent, title: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="impact-description">Section Description</Label>
                <Textarea
                  id="impact-description"
                  value={impactContent.description}
                  onChange={(e) => setImpactContent({ ...impactContent, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="impact-goal">Fundraising Goal</Label>
                  <Input
                    id="impact-goal"
                    value={impactContent.goal}
                    onChange={(e) => setImpactContent({ ...impactContent, goal: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="impact-sets">Number of Sets</Label>
                  <Input
                    id="impact-sets"
                    value={impactContent.sets}
                    onChange={(e) => setImpactContent({ ...impactContent, sets: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="impact-timeline">Project Timeline</Label>
                  <Input
                    id="impact-timeline"
                    value={impactContent.timeline}
                    onChange={(e) => setImpactContent({ ...impactContent, timeline: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="impact-progress">Current Progress</Label>
                  <Input
                    id="impact-progress"
                    value={impactContent.progress}
                    onChange={(e) => setImpactContent({ ...impactContent, progress: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("impact")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cta">
          <Card>
            <CardHeader>
              <CardTitle>Call to Action Content</CardTitle>
              <p className="text-slate-600">Final section encouraging donations and action.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="cta-title">Section Title</Label>
                <Input
                  id="cta-title"
                  value={ctaContent.title}
                  onChange={(e) => setCtaContent({ ...ctaContent, title: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="cta-description">Section Description</Label>
                <Textarea
                  id="cta-description"
                  value={ctaContent.description}
                  onChange={(e) => setCtaContent({ ...ctaContent, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="cta-deadline">Campaign Deadline</Label>
                <Input
                  id="cta-deadline"
                  value={ctaContent.deadline}
                  onChange={(e) => setCtaContent({ ...ctaContent, deadline: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="cta-urgency">Urgency Message</Label>
                <Textarea
                  id="cta-urgency"
                  value={ctaContent.urgencyMessage}
                  onChange={(e) => setCtaContent({ ...ctaContent, urgencyMessage: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("cta")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
