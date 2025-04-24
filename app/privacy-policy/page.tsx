import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - MontagueCrest",
  description: "Learn how MontagueCrest handles your personal information and protects your privacy.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information
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
                  Welcome to MontagueCrest. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
                <p className="mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>Register for an account</li>
                  <li>Purchase our services</li>
                  <li>Sign up for our newsletter</li>
                  <li>Contact our support team</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="mb-6">
                  This information may include your name, email address, phone number, billing information, and business details.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send administrative information, such as updates or changes to our policies</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send you marketing communications</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Cookies and Tracking Technologies</h2>
                <p className="mb-6">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no data transmission over the Internet or storage technology can be guaranteed to be 100% secure.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Third-Party Services</h2>
                <p className="mb-6">
                  We may use third-party services, such as Gumroad for payment processing and analytics tools, which may collect information sent by your browser as part of their services. These third parties have their own privacy policies addressing how they use such information.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Your Rights</h2>
                <p className="mb-6">
                  Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict processing of your personal data. Please contact us to exercise these rights.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to This Privacy Policy</h2>
                <p className="mb-6">
                  We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new privacy policy on this page.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:montaguecrest@gmail.com" className="text-purple-600 hover:text-purple-800">montaguecrest@gmail.com</a>.
                </p>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  By using our services, you acknowledge that you have read and understood this Privacy Policy.
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