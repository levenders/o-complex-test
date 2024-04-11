'use client'

import { complexApiClient } from '@/api/complexApiClient'
import { TAllProductsResponse, TProduct } from '@/types'
import { useEffect, useState } from 'react'
import { getProductFromResponse } from './helpers'

export const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1)

    complexApiClient<TAllProductsResponse>({
      url: `/products?page=${currentPage + 1}&page_size=20`,
    }).then((data) => {
      const draftProducts = data.products.map((productResponse) =>
        getProductFromResponse(productResponse)
      )

      setProducts([...products, ...draftProducts])
    })
  }

  useEffect(() => {
    complexApiClient<TAllProductsResponse>({
      url: '/products?page=1&page_size=20',
    }).then((data) => {
      const draftProducts = data.products.map((productResponse) =>
        getProductFromResponse(productResponse)
      )

      setProducts(draftProducts)
    })
  }, [])

  return (
    <div>
      {products.map((product) => product.title)}

      <button onClick={loadMore}>click me</button>
    </div>
  )
}
