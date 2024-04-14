'use client'

import { FC } from 'react'
import Image from 'next/image'

import { TProduct } from '@/types'
import { priceRu } from '@/helpers'

import { AddButton } from './components/AddButton'

import styles from './ProductItem.module.css'

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

  const onChangeCount = (count: number) => {
    onChangeProduct(product.id, count)
  }

  const src = product.imageUrl
  return (
    <div className={styles.product}>
      <Image
        loader={() => src}
        src={src}
        alt={product.title}
        width={320}
        height={430}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{`Стоимость: ${priceRu(product.onePrice)}`}</h4>
      {product.count > 0 ? (
        <AddButton
          count={product.count}
          addCount={addCount}
          removeCount={removeCount}
          onChangeCount={onChangeCount}
        />
      ) : (
        <button onClick={addCount} className={styles.buyButton}>
          <span>Купить</span>
        </button>
      )}
    </div>
  )
}
