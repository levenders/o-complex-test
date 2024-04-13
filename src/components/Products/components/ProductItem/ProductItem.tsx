'use client'

import { FC } from 'react'

import { TProduct } from '@/types'

import { AddButton } from './components/AddButton'

import styles from './ProductItem.module.css'
import { priceRu } from '@/helpers'

interface IProps {
  product: TProduct
  onChangeProduct: (productId: number, count: number) => void
}

export const ProductItem: FC<IProps> = ({ product, onChangeProduct }) => {
  const addCount = () => {
    onChangeProduct(product.id, product.count + 1)
  }

  const removeCount = () => {
    onChangeProduct(product.id, product.count - 1)
  }

  return (
    <div className={styles.product}>
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{`Стоимость: ${priceRu(product.onePrice)}`}</h4>
      {product.count > 0 ? (
        <AddButton
          count={product.count}
          addCount={addCount}
          removeCount={removeCount}
        />
      ) : (
        <button onClick={addCount} className={styles.buyButton}>
          <span>Купить</span>
        </button>
      )}
    </div>
  )
}
