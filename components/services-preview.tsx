import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Share2, FileText } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Customer Support Chatbot",
    description: "24/7 customer service without hiring new staff",
    benefit: "Reduce support costs by 60%",
    icon: MessageSquare,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Lead Generation Bot",
    description: "Automatically qualify and nurture leads",
    benefit: "Increase conversion rates by 35%",
    icon: Users,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Social Media Automation",
    description: "AI-crafted content posted automatically",
    benefit: "Save 15+ hours per week on content creation",
    icon: Share2,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Invoice Automation",
    description: "Generate, send and track invoices automatically",
    benefit: "Get paid 45% faster with automated follow-ups",
    icon: FileText,
    color: "bg-orange-500",
  },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Solutions Ready for Your Business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools that integrate seamlessly with your existing business processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`${service.color} p-4 flex justify-center`}>
                <service.icon className="h-12 w-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg mb-6">
                  <p className="text-gray-800 font-medium">
                    <span className="text-green-600">✓</span> {service.benefit}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">Buy Now</Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
