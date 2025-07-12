import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FCS</span>
              </div>
              <div>
                <div className="text-lg font-bold">FGCI Alumni</div>
                <div className="text-sm text-slate-400">Rebuild FCS Hall</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Together, we're rebuilding the sacred space that shaped our faith and fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/donate" className="block text-slate-400 hover:text-white transition-colors">
                Make a Donation
              </Link>
              <Link href="/leaderboard" className="block text-slate-400 hover:text-white transition-colors">
                Set Leaderboard
              </Link>
              <Link href="/about" className="block text-slate-400 hover:text-white transition-colors">
                About the Campaign
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+234 803 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">fgci.alumni@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">Federal Government College, Ilorin, Kwara State</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-400 text-sm mb-3">Get updates on our progress and upcoming events.</p>
            <Link href="/donate">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Support Now
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} FGCI Alumni FCS Hall Rebuilding Campaign. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">Built with love by alumni, for alumni. Together we rebuild.</p>
        </div>
      </div>
    </footer>
  )
}
