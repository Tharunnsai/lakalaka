import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The chatbot implementation was seamless and our customer satisfaction scores have increased by 25%.",
    name: "Sarah Johnson",
    company: "TechSolutions Inc.",
  },
  {
    id: 2,
    quote: "Our lead generation has improved dramatically. The AI bot qualifies leads better than our previous system.",
    name: "Michael Chen",
    company: "Growth Partners",
  },
  {
    id: 3,
    quote: "The social media automation has saved us countless hours and our engagement has never been higher.",
    name: "Jessica Williams",
    company: "Brand Elevate",
  },
]

const industries = [
  "Retail",
  "Healthcare",
  "Finance",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Technology",
  "Hospitality",
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built by AI Experts You Can Trust</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 10+ years in AI implementation, our team has helped hundreds of businesses transform their
            operations
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8">Integration Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
