import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What if I'm not technical?",
    answer:
      "Our team handles 100% of the technical setup and integration. You don't need any technical knowledge to use our services.",
  },
  {
    question: "How do you access my platforms?",
    answer:
      "We use secure, temporary access credentials that you control. All access is documented and can be revoked at any time.",
  },
  {
    question: "How long until my solution is working?",
    answer: "Most implementations are complete within 48 hours. Complex integrations may take up to 72 hours.",
  },
  {
    question: "What platforms do you integrate with?",
    answer:
      "We support most major CRMs, website platforms, social media platforms, and business tools including Salesforce, HubSpot, WordPress, Shopify, and many more.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. Our solutions work in your existing business tools. There's no need to install any additional software.",
  },
  {
    question: "What happens if I need changes?",
    answer:
      "Simple adjustments are included in your one-time fee. Major changes or new features are available at an additional cost based on the scope of work.",
  },
  {
    question: "Is there ongoing support?",
    answer:
      "We provide 30 days of free support after implementation. After that, you can purchase a maintenance package for ongoing support and updates.",
  },
  {
    question: "Can I cancel after purchasing?",
    answer:
      "We offer a 14-day satisfaction guarantee. If you're not happy with your solution, we'll work to fix it or provide a refund.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Still have questions? We're here to help.</p>
          <a href="#contact" className="text-blue-600 font-medium hover:underline">
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  )
}
