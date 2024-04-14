'use client'

import { FC, useEffect, useState } from 'react'

import { TProduct } from '@/types'
import { complexApiClient } from '@/api/complexApiClient'

import styles from './ShoppingCart.module.css'

interface IProps {
  products: TProduct[]
}

const onSubmit = (inputValue: string, products: TProduct[]) => {
  const responseBody = {
    phone: inputValue,
    cart: products.map((p) => ({ id: p.id, quantity: p.count })),
  }
  console.log(JSON.stringify(responseBody))

  complexApiClient({
    url: '/order',
    method: 'POST',
    body: responseBody,
  }).then((response) => {
    console.log(response)
  })
}

export const ShoppingCart: FC<IProps> = ({ products }) => {
  const getInputLocalStorage: string = localStorage.getItem('input')

  const [inputValue, setInputValue] = useState(
    !localStorage.getItem('input') == null
      ? JSON.parse(getInputLocalStorage)
      : ''
  )

  useEffect(() => {
    localStorage.setItem('input', JSON.stringify(inputValue))
  }, [inputValue])

  useEffect(() => {
    if (getInputLocalStorage !== null) {
      setInputValue(JSON.parse(getInputLocalStorage))
    } else {
      localStorage.setItem('input', JSON.stringify([]))
    }
  }, [])

  return (
    <div className={styles.shoppungCartWrapper}>
      <h2>Добавленные товары:</h2>
      {products.length === 0 && <h3>В корзине пока что пусто :&nbsp;(</h3>}
      {products.map((p, i) => (
        <div key={p.id} className={styles.selectedItems}>
          <h3>{`${i + 1}. ${p.title}`}</h3>
          <p>x&nbsp;{p.count}:</p>
          <p>&nbsp;{p.totalPrice}</p>
        </div>
      ))}
      <form
        className={styles.formNumber}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(inputValue, products)
        }}
      >
        <input
          type="tel"
          placeholder="+7 (999) 999-99-99"
          className={styles.formInput}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.currentTarget.value)
          }}
        />
        <button type="submit" className={styles.formButton}>
          Оформить заказ
        </button>
      </form>
      <div></div>
    </div>
  )
}
