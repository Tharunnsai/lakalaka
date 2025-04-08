import { Search, CreditCard, Zap } from "lucide-react"

interface StepCardProps {
  step: {
    id: number
    title: string
    description: string
    icon: string
  }
}

export default function StepCard({ step }: StepCardProps) {
  const getIcon = () => {
    switch (step.icon) {
      case "Search":
        return <Search className="h-10 w-10 text-purple-600" />
      case "CreditCard":
        return <CreditCard className="h-10 w-10 text-purple-600" />
      case "Zap":
        return <Zap className="h-10 w-10 text-purple-600" />
      default:
        return <Search className="h-10 w-10 text-purple-600" />
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center relative z-10 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md">
        {step.id}
      </div>
      <div className="flex justify-center mb-6 mt-6">
        <div className="bg-purple-100 p-4 rounded-xl">{getIcon()}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  )
}
