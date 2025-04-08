import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You for Your Purchase!</h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your order and will begin working on your AI solution right away.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
                <h2 className="text-2xl font-bold mb-4">Next Steps:</h2>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-gray-700">
                    <span className="font-medium">Check your email</span> - We've sent you a confirmation with details
                    about your purchase
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Complete the questionnaire</span> - You'll receive a brief
                    questionnaire to help us customize your solution
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Implementation begins</span> - Our team will start working on your
                    solution within 24 hours
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Delivery</span> - You'll receive your completed solution within 48
                    hours
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button variant="outline" className="border-purple-600 text-purple-600">
                    Browse More Services
                  </Button>
                </Link>
                <Link href="/support">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Get Premium Support <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
