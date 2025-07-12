import { DonationForm } from "@/components/donation-form"
import { DonationInfo } from "@/components/donation-info"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Make Your Pledge</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your contribution will help rebuild the FCS Church Hall and preserve this sacred space for future
              generations of students.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <DonationForm />
            <DonationInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
