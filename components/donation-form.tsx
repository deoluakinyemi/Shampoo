"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, CreditCard, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    graduationSet: "",
    amount: "",
    customAmount: "",
    paymentPlan: "",
    paymentDates: "",
    alreadyPaid: false,
    anonymous: false,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const router = useRouter()

  const graduationSets = Array.from({ length: 52 }, (_, i) => 1973 + i)

  const predefinedAmounts = [
    { value: "50000", label: "₦50,000" },
    { value: "100000", label: "₦100,000" },
    { value: "250000", label: "₦250,000" },
    { value: "500000", label: "₦500,000" },
    { value: "1000000", label: "₦1,000,000" },
    { value: "custom", label: "Custom Amount" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Validate custom amount if selected
      if (formData.amount === "custom" && (!formData.customAmount || Number.parseInt(formData.customAmount) < 1000)) {
        setSubmitStatus({
          type: "error",
          message: "Please enter a valid custom amount (minimum ₦1,000)",
        })
        setIsSubmitting(false)
        return
      }

      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          customAmount: formData.amount === "custom" ? Number.parseInt(formData.customAmount) : undefined,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Your donation pledge has been submitted successfully!",
        })

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          graduationSet: "",
          amount: "",
          customAmount: "",
          paymentPlan: "",
          paymentDates: "",
          alreadyPaid: false,
          anonymous: false,
          message: "",
        })

        // Redirect to thank you page after 3 seconds
        setTimeout(() => {
          router.push("/?success=true")
        }, 3000)
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit donation. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error submitting donation:", error)
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Donation Commitment Form
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        {submitStatus.type && (
          <Alert
            className={`mb-6 ${
              submitStatus.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
            }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="w-4 h-4 text-green-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600" />
            )}
            <AlertDescription className={submitStatus.type === "success" ? "text-green-800" : "text-red-800"}>
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="graduationSet">Graduation Set *</Label>
                <Select
                  value={formData.graduationSet}
                  onValueChange={(value) => setFormData({ ...formData, graduationSet: value })}
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your set" />
                  </SelectTrigger>
                  <SelectContent>
                    {graduationSets.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        Class of {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>

          {/* Contribution Amount */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Contribution Amount</h3>

            <RadioGroup
              value={formData.amount}
              onValueChange={(value) => setFormData({ ...formData, amount: value })}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              disabled={isSubmitting}
            >
              {predefinedAmounts.map((amount) => (
                <div key={amount.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={amount.value} id={amount.value} disabled={isSubmitting} />
                  <Label htmlFor={amount.value} className="cursor-pointer">
                    {amount.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {formData.amount === "custom" && (
              <div>
                <Label htmlFor="customAmount">Custom Amount (₦)</Label>
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="Enter amount"
                  min="1000"
                  value={formData.customAmount}
                  onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
            )}
          </div>

          {/* Payment Plan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Payment Plan</h3>

            <RadioGroup
              value={formData.paymentPlan}
              onValueChange={(value) => setFormData({ ...formData, paymentPlan: value })}
              disabled={isSubmitting}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" disabled={isSubmitting} />
                <Label htmlFor="one-time" className="cursor-pointer">
                  One-time payment
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" disabled={isSubmitting} />
                <Label htmlFor="monthly" className="cursor-pointer">
                  Monthly installments (2-6 months)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="three-part" id="three-part" disabled={isSubmitting} />
                <Label htmlFor="three-part" className="cursor-pointer">
                  Three-part split payment
                </Label>
              </div>
            </RadioGroup>

            {(formData.paymentPlan === "monthly" || formData.paymentPlan === "three-part") && (
              <div>
                <Label htmlFor="paymentDates">Preferred Payment Dates</Label>
                <Input
                  id="paymentDates"
                  placeholder="e.g., July 31st, August 31st, September 30th, October 31st, November 30th, December 31st"
                  value={formData.paymentDates}
                  onChange={(e) => setFormData({ ...formData, paymentDates: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
            )}
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="alreadyPaid"
                checked={formData.alreadyPaid}
                onCheckedChange={(checked) => setFormData({ ...formData, alreadyPaid: checked as boolean })}
                disabled={isSubmitting}
              />
              <Label htmlFor="alreadyPaid" className="cursor-pointer">
                I have already made a payment and want to contribute more
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={formData.anonymous}
                onCheckedChange={(checked) => setFormData({ ...formData, anonymous: checked as boolean })}
                disabled={isSubmitting}
              />
              <Label htmlFor="anonymous" className="cursor-pointer">
                Keep my contribution anonymous on the leaderboard
              </Label>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Share a memory or message about the FCS Hall..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting Pledge...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Submit Pledge Commitment
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
