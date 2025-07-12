"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, RefreshCw, Eye, Plus, Trash2 } from "lucide-react"

export function HeaderFooterManager() {
  const [headerContent, setHeaderContent] = useState({
    logo: {
      text: "FCS",
      title: "FGCI Alumni",
      subtitle: "Rebuild FCS Hall",
    },
    navigation: [
      { name: "Home", href: "/", active: true },
      { name: "Donate", href: "/donate", active: true },
      { name: "Leaderboard", href: "/leaderboard", active: true },
      { name: "About", href: "/about", active: true },
    ],
    ctaButton: {
      text: "Donate Now",
      href: "/donate",
      active: true,
    },
  })

  const [footerContent, setFooterContent] = useState({
    brand: {
      logoText: "FCS",
      title: "FGCI Alumni",
      subtitle: "Rebuild FCS Hall",
      description: "Together, we're rebuilding the sacred space that shaped our faith and fellowship.",
    },
    quickLinks: [
      { name: "Home", href: "/", active: true },
      { name: "Make a Donation", href: "/donate", active: true },
      { name: "Set Leaderboard", href: "/leaderboard", active: true },
      { name: "About the Campaign", href: "/about", active: true },
    ],
    contact: {
      phone: "+234 803 123 4567",
      email: "fgci.alumni@gmail.com",
      address: "Federal Government College, Ilorin, Kwara State",
    },
    social: [
      { name: "Facebook", url: "#", active: true },
      { name: "Twitter", url: "#", active: true },
      { name: "Instagram", url: "#", active: true },
    ],
    newsletter: {
      title: "Stay Connected",
      description: "Get updates on our progress and upcoming events.",
      buttonText: "Support Now",
    },
    copyright: "FGCI Alumni FCS Hall Rebuilding Campaign. All rights reserved.",
    tagline: "Built with love by alumni, for alumni. Together we rebuild.",
  })

  const handleSave = (section: string) => {
    console.log(`Saving ${section} content...`)
    // In a real app, this would save to your backend
  }

  const addNavigationItem = () => {
    setHeaderContent({
      ...headerContent,
      navigation: [...headerContent.navigation, { name: "New Item", href: "/new", active: true }],
    })
  }

  const removeNavigationItem = (index: number) => {
    const newNavigation = headerContent.navigation.filter((_, i) => i !== index)
    setHeaderContent({ ...headerContent, navigation: newNavigation })
  }

  const addQuickLink = () => {
    setFooterContent({
      ...footerContent,
      quickLinks: [...footerContent.quickLinks, { name: "New Link", href: "/new", active: true }],
    })
  }

  const removeQuickLink = (index: number) => {
    const newQuickLinks = footerContent.quickLinks.filter((_, i) => i !== index)
    setFooterContent({ ...footerContent, quickLinks: newQuickLinks })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Header & Footer Management</CardTitle>
          <p className="text-slate-600">Customize the header navigation and footer content.</p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="header" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="header">Header Settings</TabsTrigger>
          <TabsTrigger value="footer">Footer Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="header">
          <div className="space-y-6">
            {/* Logo Section */}
            <Card>
              <CardHeader>
                <CardTitle>Logo & Branding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="logo-text">Logo Text</Label>
                    <Input
                      id="logo-text"
                      value={headerContent.logo.text}
                      onChange={(e) =>
                        setHeaderContent({
                          ...headerContent,
                          logo: { ...headerContent.logo, text: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="logo-title">Title</Label>
                    <Input
                      id="logo-title"
                      value={headerContent.logo.title}
                      onChange={(e) =>
                        setHeaderContent({
                          ...headerContent,
                          logo: { ...headerContent.logo, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="logo-subtitle">Subtitle</Label>
                    <Input
                      id="logo-subtitle"
                      value={headerContent.logo.subtitle}
                      onChange={(e) =>
                        setHeaderContent({
                          ...headerContent,
                          logo: { ...headerContent.logo, subtitle: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Navigation Menu
                  <Button onClick={addNavigationItem} size="sm" className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Item
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {headerContent.navigation.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`nav-name-${index}`}>Name</Label>
                        <Input
                          id={`nav-name-${index}`}
                          value={item.name}
                          onChange={(e) => {
                            const newNavigation = [...headerContent.navigation]
                            newNavigation[index] = { ...item, name: e.target.value }
                            setHeaderContent({ ...headerContent, navigation: newNavigation })
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`nav-href-${index}`}>Link</Label>
                        <Input
                          id={`nav-href-${index}`}
                          value={item.href}
                          onChange={(e) => {
                            const newNavigation = [...headerContent.navigation]
                            newNavigation[index] = { ...item, href: e.target.value }
                            setHeaderContent({ ...headerContent, navigation: newNavigation })
                          }}
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => removeNavigationItem(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA Button Section */}
            <Card>
              <CardHeader>
                <CardTitle>Call-to-Action Button</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cta-text">Button Text</Label>
                    <Input
                      id="cta-text"
                      value={headerContent.ctaButton.text}
                      onChange={(e) =>
                        setHeaderContent({
                          ...headerContent,
                          ctaButton: { ...headerContent.ctaButton, text: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="cta-href">Button Link</Label>
                    <Input
                      id="cta-href"
                      value={headerContent.ctaButton.href}
                      onChange={(e) =>
                        setHeaderContent({
                          ...headerContent,
                          ctaButton: { ...headerContent.ctaButton, href: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={() => handleSave("header")} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Header Changes
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
          </div>
        </TabsContent>

        <TabsContent value="footer">
          <div className="space-y-6">
            {/* Brand Section */}
            <Card>
              <CardHeader>
                <CardTitle>Brand Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="footer-logo">Logo Text</Label>
                    <Input
                      id="footer-logo"
                      value={footerContent.brand.logoText}
                      onChange={(e) =>
                        setFooterContent({
                          ...footerContent,
                          brand: { ...footerContent.brand, logoText: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="footer-title">Title</Label>
                    <Input
                      id="footer-title"
                      value={footerContent.brand.title}
                      onChange={(e) =>
                        setFooterContent({
                          ...footerContent,
                          brand: { ...footerContent.brand, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="footer-subtitle">Subtitle</Label>
                    <Input
                      id="footer-subtitle"
                      value={footerContent.brand.subtitle}
                      onChange={(e) =>
                        setFooterContent({
                          ...footerContent,
                          brand: { ...footerContent.brand, subtitle: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="footer-description">Description</Label>
                  <Textarea
                    id="footer-description"
                    value={footerContent.brand.description}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        brand: { ...footerContent.brand, description: e.target.value },
                      })
                    }
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Links Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Quick Links
                  <Button onClick={addQuickLink} size="sm" className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Link
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {footerContent.quickLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`link-name-${index}`}>Name</Label>
                        <Input
                          id={`link-name-${index}`}
                          value={link.name}
                          onChange={(e) => {
                            const newQuickLinks = [...footerContent.quickLinks]
                            newQuickLinks[index] = { ...link, name: e.target.value }
                            setFooterContent({ ...footerContent, quickLinks: newQuickLinks })
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`link-href-${index}`}>Link</Label>
                        <Input
                          id={`link-href-${index}`}
                          value={link.href}
                          onChange={(e) => {
                            const newQuickLinks = [...footerContent.quickLinks]
                            newQuickLinks[index] = { ...link, href: e.target.value }
                            setFooterContent({ ...footerContent, quickLinks: newQuickLinks })
                          }}
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => removeQuickLink(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information Section */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      value={footerContent.contact.phone}
                      onChange={(e) =>
                        setFooterContent({
                          ...footerContent,
                          contact: { ...footerContent.contact, phone: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      value={footerContent.contact.email}
                      onChange={(e) =>
                        setFooterContent({
                          ...footerContent,
                          contact: { ...footerContent.contact, email: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-address">Address</Label>
                  <Textarea
                    id="contact-address"
                    value={footerContent.contact.address}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        contact: { ...footerContent.contact, address: e.target.value },
                      })
                    }
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Social Media Section */}
            <Card>
              <CardHeader>
                <CardTitle>Social Media Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {footerContent.social.map((social, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`social-name-${index}`}>Platform</Label>
                        <Input
                          id={`social-name-${index}`}
                          value={social.name}
                          onChange={(e) => {
                            const newSocial = [...footerContent.social]
                            newSocial[index] = { ...social, name: e.target.value }
                            setFooterContent({ ...footerContent, social: newSocial })
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`social-url-${index}`}>URL</Label>
                        <Input
                          id={`social-url-${index}`}
                          value={social.url}
                          onChange={(e) => {
                            const newSocial = [...footerContent.social]
                            newSocial[index] = { ...social, url: e.target.value }
                            setFooterContent({ ...footerContent, social: newSocial })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Section */}
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="newsletter-title">Section Title</Label>
                  <Input
                    id="newsletter-title"
                    value={footerContent.newsletter.title}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        newsletter: { ...footerContent.newsletter, title: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="newsletter-description">Description</Label>
                  <Textarea
                    id="newsletter-description"
                    value={footerContent.newsletter.description}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        newsletter: { ...footerContent.newsletter, description: e.target.value },
                      })
                    }
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="newsletter-button">Button Text</Label>
                  <Input
                    id="newsletter-button"
                    value={footerContent.newsletter.buttonText}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        newsletter: { ...footerContent.newsletter, buttonText: e.target.value },
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Copyright Section */}
            <Card>
              <CardHeader>
                <CardTitle>Copyright & Legal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="copyright">Copyright Text</Label>
                  <Input
                    id="copyright"
                    value={footerContent.copyright}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        copyright: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={footerContent.tagline}
                    onChange={(e) =>
                      setFooterContent({
                        ...footerContent,
                        tagline: e.target.value,
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={() => handleSave("footer")} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Footer Changes
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
