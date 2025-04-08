import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, ArrowLeft, Shield, Clock } from "lucide-react";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";   

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Loading component for the service page
function ServiceLoading() {
  return (
    <div className="animate-pulse">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
                <div className="aspect-video w-full bg-gray-200"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
                <div className="h-8 bg-gray-200 rounded mb-6"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-6 w-6 bg-gray-200 rounded-full mr-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-8 w-24 bg-gray-200 rounded"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded-xl mb-6"></div>
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="border-t pt-6 mt-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center">
                        <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

async function ServiceContent({ slug }: { slug: string }) {
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const thumbnailUrl = service.thumbnail?.[0]?.url || "/placeholder-image.jpg";
  
  // Mock features for display purposes
  const features = [
    "Full implementation and setup",
    "Seamless integration with your existing systems",
    "Detailed documentation and guides",
    "Basic email support"
  ];

  return (
    <>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to all services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{service.name}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">{service.description.substring(0, 120)}{service.description.length > 120 ? '...' : ''}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-800 font-medium text-sm flex items-center">
              <Clock className="h-4 w-4 mr-2" /> Setup in 48 hours
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-full text-green-800 font-medium text-sm flex items-center">
              <Shield className="h-4 w-4 mr-2" /> 14-day guarantee
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
                <div className="aspect-video relative w-full">
                  <Image
                    src={thumbnailUrl}
                    alt={service.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">About This Service</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <h3 className="text-xl font-bold mb-4 text-gray-900">What You'll Get</h3>
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Purchase</h3>
                      <p className="text-gray-600">Purchase this service with one click</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Questionnaire</h3>
                      <p className="text-gray-600">Fill out a brief questionnaire about your needs</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                      <p className="text-gray-600">Our team implements your solution within 48 hours</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Start Using</h3>
                      <p className="text-gray-600">Start using your new AI tool immediately</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-purple-600">${service.price}</h3>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">{service.type}</span>
                </div>

                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 mb-6 py-6 text-lg rounded-xl shadow-lg shadow-purple-200 transition-all hover:shadow-xl">
                  <a href={service.gumroadLink} target="_blank" rel="noopener noreferrer">
                    Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-medium">48-hour delivery</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-medium">14-day satisfaction guarantee</span>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold mb-4 text-gray-900">This purchase includes:</h4>
                  <ul className="space-y-3">
                    {features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-6 mt-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Need more support?</h4>
                    <p className="text-gray-600 mb-4">
                      Get unlimited support and priority service with our Premium Support Plan
                    </p>
                    <Link href="/support">
                      <Button
                        variant="outline"
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl"
                      >
                        View $5/month Plan
                      </Button>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-white flex-grow pt-24">
        <Suspense fallback={<ServiceLoading />}>
          <ServiceContent slug={slug} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
