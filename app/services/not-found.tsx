import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-20 text-center">
      <div className="bg-red-50 rounded-full p-6 mb-6 inline-block">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-red-500"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Service Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Sorry, we couldn't find the service you're looking for. It may have been removed or the URL might be incorrect.
      </p>
      <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all">
        <Link href="/services">
          Browse All Services
        </Link>
      </Button>
    </div>
  );
} 