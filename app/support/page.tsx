import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink } from "lucide-react"

export default function SupportPlanPage() {
  const supportFeatures = [
    "Unlimited support requests via email and WhatsApp",
    "Priority response within 24 hours, guaranteed",
    "Monthly 30-minute consultation call",
    "Access to all service updates and improvements",
    "15% discount on all future service purchases",
    "Dedicated support specialist",
    "Cancel anytime - no long-term commitment",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Premium Support Plan</h1>
            <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Get unlimited support and priority service for all your AI needs
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-purple-600 p-8 text-white text-center">
                  <h2 className="text-3xl font-bold mb-2">Premium Support Plan</h2>
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold">$5</span>
                    <span className="text-xl ml-2">/month</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
                  <ul className="space-y-4 mb-8">
                    {supportFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg">
                    Subscribe Now <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-center text-gray-500 mt-4">Powered by Gumroad secure checkout</p>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Can I cancel anytime?</h4>
                    <p className="text-gray-700">
                      Yes, you can cancel your subscription at any time. There are no long-term commitments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How do I get support?</h4>
                    <p className="text-gray-700">
                      You'll receive access to a dedicated email address and WhatsApp number for direct support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">What if I only have one service?</h4>
                    <p className="text-gray-700">
                      The support plan covers all services you purchase, whether it's one or many. It's a great value
                      even for a single service.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How do I schedule my consultation call?</h4>
                    <p className="text-gray-700">
                      After subscribing, you'll receive a link to our scheduling system where you can book your monthly
                      call at a time that works for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
