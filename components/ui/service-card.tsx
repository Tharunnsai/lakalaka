'use client';

import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types/services";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { name, description, price, gumroadLink, redirectLink, thumbnail, slug, tagline, number_of_purchases } = service;
  
  const thumbnailUrl = thumbnail?.[0]?.url || "/placeholder-image.jpg";
  
  // Use redirectLink if available, otherwise use gumroadLink and add params for redirect
  let purchaseLink = redirectLink || gumroadLink;
  
  // Add redirect parameter to Gumroad link if it doesn't have one
  if (purchaseLink && purchaseLink.includes('gumroad.com') && !purchaseLink.includes('wanted=true')) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://montaguecrest.com';
    purchaseLink = `${purchaseLink}?wanted=true&referrer=${encodeURIComponent(`${siteUrl}/services/${slug}`)}&from_gumroad=true&success_url=${encodeURIComponent(`${siteUrl}/thank-you`)}`;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div>
        {/* Image section with Link */}
        <div className="aspect-video relative overflow-hidden">
          <Link href={`/services/${slug}`}>
            <Image
              src={thumbnailUrl}
              alt={name}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            {number_of_purchases && number_of_purchases > 0 && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                {number_of_purchases}+ customers
              </div>
            )}
          </Link>
        </div>

        {/* Content section */}
        <div className="p-6">
          {/* Title and tagline */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          {tagline && (
            <p className="text-indigo-600 font-medium mb-2">{tagline}</p>
          )}
          <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        
          {/* Price and button */}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-indigo-600">${price}</p>
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700"
              asChild
            >
              <Link href={`/services/${slug}`}>
                <span className="inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 