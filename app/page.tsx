"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function HomePage() {
  const searchParams = useSearchParams()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccessMessage(true)
      // Hide message after 10 seconds
      setTimeout(() => setShowSuccessMessage(false), 10000)
    }
  }, [searchParams])

  return (
    <main className="min-h-screen">
      {showSuccessMessage && (
        <div className="bg-green-50 border-b border-green-200 py-4">
          <div className="container mx-auto px-4">
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Thank you!</strong> Your donation pledge has been successfully submitted. You should receive a
                confirmation email shortly.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
      <Hero />
      <Story />
      <Impact />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
