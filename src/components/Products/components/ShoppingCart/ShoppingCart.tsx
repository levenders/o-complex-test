import { FC, useContext, useEffect } from 'react'

import styles from './ShoppingCart.module.css'
import { TProduct } from '@/types'

interface IProps {
  products: TProduct[]
}

export const ShoppingCart: FC<IProps> = ({ products }) => {
  return (
    <div className={styles.shoppungCartWrapper}>
      <h2>Добавленные товары:</h2>
      {products.length === 0 && <h3>В корзине пока что пусто :&nbsp;(</h3>}
      {products.map((d, i) => (
        <div key={d.id} className={styles.selectedItems}>
          <h3>{`${i + 1}. ${d.title}`}</h3>
          <p>x&nbsp;{d.count}:</p>
          <p>{d.totalPrice}</p>
        </div>
      ))}
      <form className={styles.formNumber}>
        <input
          type="tel"
          placeholder="+7 (999) 999-99-99"
          className={styles.formInput}
        />
        <button type="submit" className={styles.formButton}>
          Оформить заказ
        </button>
      </form>
    </div>
  )
}
