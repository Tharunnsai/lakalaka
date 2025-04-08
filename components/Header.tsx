"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="bg-purple-600 text-white p-2 rounded-lg mr-2">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
            MontagueCrest
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Services
          </Link>
          <Link href="/support" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Support Plan
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Contact
          </Link>
          <Link href="/services">
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-200 hover:shadow-lg transition-all">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link
              href="/services"
              className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/support"
              className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support Plan
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full rounded-xl py-6">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
