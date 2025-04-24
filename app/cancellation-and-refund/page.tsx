import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy - MontagueCrest",
  description: "Our policy regarding cancellations, refunds, and service termination.",
}

export default function CancellationAndRefundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Cancellation and Refund Policy</h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Our guidelines for cancellations, refunds, and service termination
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
                <p className="mb-6">
                  This Cancellation and Refund Policy outlines the terms under which you may cancel your MontagueCrest services and request refunds. By purchasing our services, you agree to the terms of this policy.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. One-Time Service Purchases</h2>
                <p className="mb-6">
                  We offer certain AI services as one-time purchases. For these services, the following refund policy applies:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>If you are not satisfied with the service, you may request a refund within 7 days of your purchase.</li>
                  <li>To be eligible for a refund, you must provide specific reasons for your dissatisfaction and demonstrate that the service did not perform as described.</li>
                  <li>Refund requests should be submitted via email to <a href="mailto:montaguecrest@gmail.com" className="text-purple-600 hover:text-purple-800">montaguecrest@gmail.com</a>.</li>
                  <li>Once approved, refunds will be processed using the original payment method within 5-10 business days.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Support Plan Subscriptions</h2>
                <p className="mb-4">
                  For our Premium Support Plan subscription service, the following cancellation and refund terms apply:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>You may cancel your subscription at any time through your Gumroad account or by contacting our support team.</li>
                  <li>Upon cancellation, you will continue to have access to the Premium Support Plan until the end of your current billing period.</li>
                  <li>No refunds are provided for partial subscription periods or for months already paid.</li>
                  <li>We do not offer prorated refunds for unused portions of subscription periods.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Exceptional Refund Circumstances</h2>
                <p className="mb-6">
                  We may consider refunds outside of the standard policy in the following exceptional circumstances:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>Technical issues that prevent service delivery and cannot be resolved within a reasonable timeframe.</li>
                  <li>Incorrect or incomplete service delivery that cannot be rectified.</li>
                  <li>Service discontinuation before completion of the agreed-upon deliverables.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. How to Request a Refund</h2>
                <p className="mb-6">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal ml-6 mb-6">
                  <li>Email <a href="mailto:montaguecrest@gmail.com" className="text-purple-600 hover:text-purple-800">montaguecrest@gmail.com</a> with the subject line "Refund Request: [Order ID]"</li>
                  <li>Include your order ID, purchase date, service purchased, and detailed reason for the refund request</li>
                  <li>Our team will review your request and respond within 2 business days</li>
                  <li>If approved, we will process the refund to your original payment method</li>
                </ol>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cancellation of Services by MontagueCrest</h2>
                <p className="mb-6">
                  We reserve the right to cancel or suspend services in the following cases:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>Violation of our Terms and Conditions</li>
                  <li>Fraudulent activity or payment disputes</li>
                  <li>Abusive behavior toward our staff</li>
                  <li>Service discontinuation (with prior notice to affected customers)</li>
                </ul>
                <p className="mb-6">
                  In such cases, refund eligibility will be determined on a case-by-case basis.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Payment Processor Policies</h2>
                <p className="mb-6">
                  We use Gumroad as our payment processor. In some cases, refund requests may be subject to Gumroad's refund policies in addition to ours. For more information, please refer to Gumroad's terms of service.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to This Policy</h2>
                <p className="mb-6">
                  We may update this Cancellation and Refund Policy from time to time. Any changes will be posted on this page with an updated revision date. Please check back periodically for updates.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Cancellation and Refund Policy, please contact us at <a href="mailto:montaguecrest@gmail.com" className="text-purple-600 hover:text-purple-800">montaguecrest@gmail.com</a>.
                </p>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  By using our services, you acknowledge that you have read and understood this Cancellation and Refund Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 