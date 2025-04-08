import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: number
  features: string[]
  ctaText: string
  ctaLink: string
}

export default function PricingCard({ title, price, features, ctaText, ctaLink }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-center">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-xl ml-2">/month</span>
        </div>
      </div>
      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={ctaLink}>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg rounded-xl shadow-lg shadow-purple-200 transition-all hover:shadow-xl">
            {ctaText}
          </Button>
        </Link>
        <p className="text-center text-gray-500 mt-4 text-sm">Cancel anytime • No long-term commitment</p>
      </div>
    </div>
  )
}
