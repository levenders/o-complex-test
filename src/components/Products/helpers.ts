import { TProduct, TProductResponse } from '@/types'

export const getProductFromResponse = (
  productResponse: TProductResponse
): TProduct => {
  return {
    id: productResponse.id,
    imageUrl: productResponse.image_url,
    title: productResponse.title,
    description: productResponse.description,
    onePrice: productResponse.price,
    totalPrice: 0,
    count: 0,
  }
}
