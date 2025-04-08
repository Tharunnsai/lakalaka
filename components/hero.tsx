"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              AI Services for Your Business. One Click. Done-for-You.
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Buy AI-powered tools tailored for your business. Our experts handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8"
                size="lg"
              >
                View Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8"
                size="lg"
              >
                Start Now
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="AI-powered business solutions"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-900">Trusted by businesses worldwide</p>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Join 500+ businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
