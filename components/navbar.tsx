"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            MontagueCrest
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            How It Works
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-gray-900 font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-gray-700 hover:text-gray-900 font-medium">
            Pricing
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-gray-900 font-medium">
            FAQ
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
