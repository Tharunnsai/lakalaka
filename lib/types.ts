export interface Service {
  id: number
  title: string
  slug: string
  shortDescription: string
  description: string
  price: number
  image?: string
  features: string[]
  badge?: string
}
