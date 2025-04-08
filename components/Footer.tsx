import Link from "next/link"
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-gray-300 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="bg-purple-600 text-white p-2 rounded-lg mr-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold text-white">MontagueCrest</span>
            </Link>
            <p className="mb-6 text-gray-300 leading-relaxed">
              AI services for your business. One click. Done-for-you. We make implementing AI solutions simple and
              affordable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/customer-support-chatbot"
                  className="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span className="mr-2">→</span> AI Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lead-generation-bot"
                  className="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span className="mr-2">→</span> Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-manager"
                  className="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span className="mr-2">→</span> Social Media
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Support Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p>support@example.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>New York, NY</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MontagueCrest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
