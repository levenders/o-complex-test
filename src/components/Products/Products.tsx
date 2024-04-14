'use client'

import { useEffect, useState } from 'react'

import { complexApiClient } from '@/api/complexApiClient'
import { TAllProductsResponse, TProduct } from '@/types'

import { getProductFromResponse } from './helpers'
import { ShoppingCart } from './components/ShoppingCart'
import { ProductItem } from './components/ProductItem'

import styles from './Products.module.css'

export const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const productsInCart = products.filter((product) => product.count > 0)

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

  const handleChangeProduct = (productId: number, count: number) => {
    const draftProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count, totalPrice: count * product.onePrice }
      }

      return product
    })

    setProducts(draftProducts)
  }

  useEffect(() => {
    setIsLoading(true)
    complexApiClient<TAllProductsResponse>({
      url: '/products?page=1&page_size=20',
    })
      .then((data) => {
        const draftProducts = data.products.map((productResponse) =>
          getProductFromResponse(productResponse)
        )

        setProducts(draftProducts)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading && <h1 className={styles.loading}>ЗАГРУЗКА ТОВАРОВ ...</h1>}
      <div className={styles.wrapper}>
        <ShoppingCart products={productsInCart} />
        <div className={styles.products}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onChangeProduct={handleChangeProduct}
            ></ProductItem>
          ))}
        </div>
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Показать еще
        </button>
      </div>
    </>
  )
}
