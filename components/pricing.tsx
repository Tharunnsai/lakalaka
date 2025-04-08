import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    id: 1,
    title: "Customer Support Chatbot",
    price: 1499,
    features: [
      "24/7 customer service",
      "Customized to your brand voice",
      "Multi-channel integration",
      "Analytics dashboard",
      "Training & setup included",
    ],
  },
  {
    id: 2,
    title: "Lead Generation Bot",
    price: 1799,
    features: [
      "Lead qualification system",
      "CRM integration",
      "Automated follow-ups",
      "Performance analytics",
      "Training & setup included",
    ],
  },
  {
    id: 3,
    title: "Social Media Automation",
    price: 1599,
    features: [
      "Content generation for 3 platforms",
      "Scheduled posting",
      "Engagement monitoring",
      "Analytics dashboard",
      "Training & setup included",
    ],
  },
  {
    id: 4,
    title: "Invoice Automation",
    price: 1299,
    features: [
      "Automated invoice generation",
      "Payment tracking",
      "Reminder system",
      "Accounting software integration",
      "Training & setup included",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            One-time setup fee. No monthly charges. Own your AI solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-1">one-time fee</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Need a Custom Solution?</h3>
            <p className="text-gray-700 mb-4">
              We offer customization options for businesses with specific requirements.
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
