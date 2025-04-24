import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions - MontagueCrest",
  description: "The terms and conditions that govern your use of MontagueCrest services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              The rules and guidelines for using our services
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing or using the services provided by MontagueCrest ("Company," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, please do not use our services.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Description of Services</h2>
                <p className="mb-6">
                  MontagueCrest provides AI-powered tools and services designed to help businesses improve their operations. Our services include, but are not limited to, AI chatbots, data analysis, product naming, and other AI-based solutions as described on our website.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Account Registration</h2>
                <p className="mb-6">
                  To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to update your information as necessary.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Payment Terms</h2>
                <p className="mb-6">
                  Our services are provided on a one-time payment or subscription basis, as indicated on our website. Payment processing is handled through Gumroad, which has its own terms of service. By making a purchase, you agree to the terms and policies of our payment processor. All payments are non-refundable unless otherwise specified in our Cancellation and Refund Policy.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Intellectual Property</h2>
                <p className="mb-6">
                  All content included on our website and in our services, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is the property of MontagueCrest or its suppliers and protected by copyright and intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our content.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. User Content</h2>
                <p className="mb-6">
                  By submitting content to our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media. You represent and warrant that you own or have the necessary rights to the content you submit.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Limitation of Liability</h2>
                <p className="mb-6">
                  To the fullest extent permitted by law, MontagueCrest shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, resulting from your use of our services, even if we have been advised of the possibility of such damages.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Disclaimers</h2>
                <p className="mb-6">
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Termination</h2>
                <p className="mb-6">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use our services will immediately cease.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Governing Law</h2>
                <p className="mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Changes to Terms</h2>
                <p className="mb-6">
                  We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by posting the updated terms on our website. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Contact Information</h2>
                <p className="mb-6">
                  If you have any questions about these Terms, please contact us at <a href="mailto:montaguecrest@gmail.com" className="text-purple-600 hover:text-purple-800">montaguecrest@gmail.com</a>.
                </p>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  By using our services, you acknowledge that you have read and understood these Terms and Conditions.
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