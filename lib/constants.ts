import type { Service } from "./types"

export const services: Service[] = [
  {
    id: 1,
    title: "AI Customer Support Chatbot",
    slug: "customer-support-chatbot",
    shortDescription: "24/7 customer service without hiring new staff",
    description:
      "Our AI Customer Support Chatbot provides round-the-clock assistance to your customers, answering common questions, troubleshooting issues, and escalating complex problems to your team when necessary. This solution integrates with your website, knowledge base, and CRM to deliver personalized support.",
    price: 299,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "24/7 automated customer support",
      "Integration with your knowledge base",
      "Custom training on your products/services",
      "Seamless handoff to human agents when needed",
      "Analytics dashboard to track performance",
      "Multi-language support",
    ],
    badge: "Popular",
  },
  {
    id: 2,
    title: "AI Lead Generation Bot",
    slug: "lead-generation-bot",
    shortDescription: "Automatically qualify and nurture leads",
    description:
      "Our AI Lead Generation Bot helps you capture, qualify, and nurture leads automatically. It engages website visitors, collects contact information, asks qualifying questions, and scores leads based on their responses. High-quality leads are immediately routed to your sales team, while others are nurtured through automated follow-ups.",
    price: 349,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Website visitor engagement",
      "Lead capture and qualification",
      "Integration with your CRM",
      "Automated follow-up sequences",
      "Lead scoring and prioritization",
      "Performance analytics dashboard",
    ],
  },
  {
    id: 3,
    title: "AI Social Media Manager",
    slug: "social-media-manager",
    shortDescription: "AI-crafted content posted automatically",
    description:
      "Our AI Social Media Manager creates and schedules content for your social media accounts. It generates posts tailored to your brand voice, curates relevant industry content, and schedules everything for optimal engagement times. You can review and approve content before it goes live, or let the AI handle everything automatically.",
    price: 249,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Content generation for multiple platforms",
      "Automated posting schedule",
      "Industry content curation",
      "Hashtag optimization",
      "Performance analytics",
      "Content calendar management",
    ],
  },
  {
    id: 4,
    title: "AI Email Marketing Assistant",
    slug: "email-marketing-assistant",
    shortDescription: "Personalized email campaigns that convert",
    description:
      "Our AI Email Marketing Assistant creates personalized email campaigns that drive conversions. It segments your audience, generates compelling subject lines and content, and optimizes send times for maximum open rates. The system learns from campaign performance to continuously improve results.",
    price: 279,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Audience segmentation",
      "Personalized email content generation",
      "A/B testing of subject lines and content",
      "Send time optimization",
      "Performance analytics",
      "Integration with major email platforms",
    ],
  },
  {
    id: 5,
    title: "AI Content Writer",
    slug: "content-writer",
    shortDescription: "SEO-optimized blog posts and articles",
    description:
      "Our AI Content Writer creates SEO-optimized blog posts, articles, and website content tailored to your industry and target keywords. Each piece is crafted to engage readers while helping your website rank higher in search results. The system can generate content calendars, draft articles, and even suggest topic ideas based on trending searches in your industry.",
    price: 199,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "SEO-optimized content creation",
      "Keyword research and integration",
      "Content calendar planning",
      "Topic idea generation",
      "Competitor content analysis",
      "Readability and engagement optimization",
    ],
    badge: "Best Value",
  },
  {
    id: 6,
    title: "AI Invoice Automation",
    slug: "invoice-automation",
    shortDescription: "Automated invoicing and payment tracking",
    description:
      "Our AI Invoice Automation system streamlines your billing process by automatically generating, sending, and tracking invoices. It integrates with your accounting software, sends payment reminders, and provides real-time insights into your accounts receivable. The system can also identify patterns in late payments and suggest optimizations to improve cash flow.",
    price: 229,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Automated invoice generation and delivery",
      "Payment tracking and reminders",
      "Integration with accounting software",
      "Customizable invoice templates",
      "Cash flow analytics and forecasting",
      "Client payment portal",
    ],
  },
]
