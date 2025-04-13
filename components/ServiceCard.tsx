import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Service } from "@/lib/types"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg?height=300&width=400"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {service.badge && (
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {service.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">${service.price}</span>
          <Link href={`/services/${service.slug}`}>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
