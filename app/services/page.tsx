import { Suspense } from "react";
import { getServices } from "@/lib/services";
import { ServiceCard } from "@/components/ui/service-card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GumroadSuccessCheck from "@/components/GumroadSuccessCheck";

async function ServicesGrid() {
  const services = await getServices();

  if (services.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-medium">No services available</h2>
        <p className="text-muted-foreground mt-2">
          Please check back later for available services.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServicesLoading() {
  return (
    <div className="py-10 text-center">
      <div className="h-8 w-36 bg-muted rounded animate-pulse mx-auto mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card shadow-sm overflow-hidden h-[360px]"
          >
            <div className="aspect-video bg-muted animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-muted rounded animate-pulse mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-between items-center">
              <div className="h-6 bg-muted rounded animate-pulse w-16"></div>
              <div className="h-10 bg-muted rounded animate-pulse w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={null}>
        <GumroadSuccessCheck />
      </Suspense>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Our AI Services</h1>
            <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our catalog of one-click AI solutions designed to help your business grow
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<ServicesLoading />}>
              <ServicesGrid />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
