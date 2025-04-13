import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StepCard from "@/components/StepCard"
import PricingCard from "@/components/PricingCard"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const steps = [
    {
      id: 1,
      title: "Choose a Service",
      description: "Browse our catalog of AI services and select the one that fits your needs.",
      icon: "Search",
    },
    {
      id: 2,
      title: "One-Click Purchase",
      description: "Simple payment process with Gumroad. No complicated setup.",
      icon: "CreditCard",
    },
    {
      id: 3,
      title: "Get Results Fast",
      description: "Receive your AI solution quickly and start seeing results immediately.",
      icon: "Zap",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 z-0"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div
            className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">
                  <Sparkles className="inline-block w-4 h-4 mr-1" /> AI-Powered Solutions
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  AI Services for Your Business. <span className="gradient-text">One Click.</span> Done-for-You.
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Affordable AI tools that deliver real results. No technical skills required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-200 transition-all hover:shadow-xl"
                    >
                      View Services
                    </Button>
                  </Link>
                  <Link href="/support">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-xl"
                    >
                      $5/month Support Plan
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Trusted by 500+ businesses</p>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl transform rotate-3"></div>
                <div className="relative rounded-2xl shadow-xl z-10 w-full h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="AI Services"
                    className="rounded-2xl"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Setup in 48 hours</p>
                      <p className="text-sm text-gray-500">No coding required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-white z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">
                Simple Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We've made getting AI solutions for your business as simple as possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 transform -translate-y-1/2 z-0"></div>

              {steps.map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-200 transition-all hover:shadow-xl"
                >
                  Browse Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions Made Simple</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We handle all the technical details so you can focus on growing your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "Zap",
                  title: "Quick Implementation",
                  description: "Get your AI solution up and running within 48 hours",
                },
                {
                  icon: "Code",
                  title: "No Coding Required",
                  description: "Our experts handle all the technical implementation",
                },
                {
                  icon: "DollarSign",
                  title: "Affordable Pricing",
                  description: "One-time payment with no hidden fees or subscriptions",
                },
                {
                  icon: "Settings",
                  title: "Fully Customizable",
                  description: "Tailored to match your brand and business needs",
                },
                {
                  icon: "BarChart",
                  title: "Performance Analytics",
                  description: "Track results and measure ROI with detailed reports",
                },
                {
                  icon: "HeadphonesIcon",
                  title: "Ongoing Support",
                  description: "Get help when you need it with our support plan",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Plan Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 z-0"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white bg-opacity-20 text-white font-medium text-sm backdrop-blur-sm">
                Premium Support
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get Expert Help When You Need It</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Unlimited support and priority service for all your AI needs
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <PricingCard
                title="Premium Support"
                price={5}
                features={[
                  "Unlimited support requests",
                  "Priority response within 24 hours",
                  "Access to all service updates",
                  "Monthly consultation call",
                  "Discounts on future services",
                ]}
                ctaText="Subscribe Now"
                ctaLink="/support"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">
                Customer Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from businesses that have transformed with our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The chatbot implementation was seamless. Our customer satisfaction scores have increased by 25% since we started using it.",
                  name: "Sarah Johnson",
                  company: "TechSolutions Inc.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Our lead generation has improved dramatically. The AI bot qualifies leads better than our previous system.",
                  name: "Michael Chen",
                  company: "Growth Partners",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "The social media automation has saved us countless hours and our engagement has never been higher.",
                  name: "Jessica Williams",
                  company: "Brand Elevate",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-full"
                        fill
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
