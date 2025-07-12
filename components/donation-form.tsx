"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Heart, CreditCard } from "lucide-react"

export function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    graduationSet: "",
    amount: "",
    paymentPlan: "",
    paymentDates: "",
    alreadyPaid: false,
    anonymous: false,
    message: "",
  })

  const graduationSets = Array.from({ length: 52 }, (_, i) => 1973 + i)

  const predefinedAmounts = [
    { value: "50000", label: "₦50,000" },
    { value: "100000", label: "₦100,000" },
    { value: "250000", label: "₦250,000" },
    { value: "500000", label: "₦500,000" },
    { value: "1000000", label: "₦1,000,000" },
    { value: "custom", label: "Custom Amount" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
                />
              </div>
              <div>
                <Label htmlFor="graduationSet">Graduation Set *</Label>
                <Select
                  value={formData.graduationSet}
                  onValueChange={(value) => setFormData({ ...formData, graduationSet: value })}
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
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
            >
              {predefinedAmounts.map((amount) => (
                <div key={amount.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={amount.value} id={amount.value} />
                  <Label htmlFor={amount.value} className="cursor-pointer">
                    {amount.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {formData.amount === "custom" && (
              <div>
                <Label htmlFor="customAmount">Custom Amount (₦)</Label>
                <Input id="customAmount" type="number" placeholder="Enter amount" min="1000" />
              </div>
            )}
          </div>

          {/* Payment Plan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Payment Plan</h3>

            <RadioGroup
              value={formData.paymentPlan}
              onValueChange={(value) => setFormData({ ...formData, paymentPlan: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time" className="cursor-pointer">
                  One-time payment
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="cursor-pointer">
                  Monthly installments (2-6 months)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="three-part" id="three-part" />
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
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
            <CreditCard className="w-5 h-5 mr-2" />
            Submit Pledge Commitment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
