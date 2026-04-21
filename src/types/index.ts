import type { ReactNode } from "react"

export interface CatalogItem {
  name: string
  description: string
  image: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  catalog?: CatalogItem[]
}

export interface SectionProps extends Section {
  isActive: boolean
}