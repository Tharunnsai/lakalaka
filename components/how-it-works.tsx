import { CheckCircle, FileText, Zap } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Implementation in Just 3 Simple Steps</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've streamlined the process to get your AI solution up and running with minimal effort on your part.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-gray-50 rounded-xl p-8 text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
              1
            </div>
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Choose a Service</h3>
            <p className="text-gray-600">Choose a service that fits your business needs from our curated selection</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 rounded-xl p-8 text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
              2
            </div>
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Submit Information</h3>
            <p className="text-gray-600">Submit your business information through our secure portal</p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 rounded-xl p-8 text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
              3
            </div>
            <div className="flex justify-center mb-6">
              <Zap className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Integrated</h3>
            <p className="text-gray-600">Our experts integrate your solution within 48 hours</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full">
            <p className="text-blue-700 font-medium flex items-center">
              <span className="mr-2">⏱️</span>
              Average setup time: 48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
