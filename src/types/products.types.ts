import { HTMLAttributes } from 'react'

export type TProductResponse = {
  id: number
  image_url: string
  title: string
  description: string
  price: number
}

export type TAllProductsResponse = {
  page: number
  amount: number
  total: number
  products: TProductResponse[]
}

export type TProduct = {
  id: number
  imageUrl: string
  title: string
  description: string
  onePrice: number
  totalPrice: number
  count: number
}
