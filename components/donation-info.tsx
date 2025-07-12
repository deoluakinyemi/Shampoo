import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Users, Phone, Mail, MapPin } from "lucide-react"

export function DonationInfo() {
  return (
    <div className="space-y-6">
      {/* Security & Trust */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Shield className="w-5 h-5" />
            Secure & Transparent
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-slate-600">All donations are processed through secure, encrypted channels</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-slate-600">Regular progress updates sent to all contributors</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-slate-600">Full financial transparency and accountability</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-slate-600">Tax receipts provided for all contributions</p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Clock className="w-5 h-5" />
            Payment Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Bank Transfer</h4>
            <div className="bg-slate-50 p-4 rounded-lg text-sm">
              <p>
                <strong>Account Name:</strong> FGCI Alumni FCS Hall Fund
              </p>
              <p>
                <strong>Bank:</strong> First Bank of Nigeria
              </p>
              <p>
                <strong>Account Number:</strong> 2034567890
              </p>
              <p>
                <strong>Sort Code:</strong> 011-152-003
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Online Payment</h4>
            <p className="text-slate-600 text-sm">Secure online payment processing through Paystack and Flutterwave</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">International Donors</h4>
            <p className="text-slate-600 text-sm">USD and other currency options available for diaspora alumni</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Payment Timeline</h4>
            <p className="text-slate-600 text-sm">Campaign runs from July to December 2024 (6 months)</p>
          </div>
        </CardContent>
      </Card>

      {/* Impact Levels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <Users className="w-5 h-5" />
            Impact Levels
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
              <span className="font-semibold text-amber-800">Foundation Builder</span>
              <span className="text-amber-700">₦50,000+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-semibold text-blue-800">Pillar Supporter</span>
              <span className="text-blue-700">₦250,000+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-semibold text-green-800">Hall Champion</span>
              <span className="text-green-700">₦500,000+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-purple-800">Legacy Patron</span>
              <span className="text-purple-700">₦1,000,000+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-800">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-slate-600">+234 803 123 4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-slate-600">fgci.alumni@gmail.com</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <span className="text-slate-600">Federal Government College, Ilorin, Kwara State, Nigeria</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
