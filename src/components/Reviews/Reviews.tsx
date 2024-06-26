'use client'

import { useState, useEffect } from 'react'

import { Review } from './components/Review'
import { TReview } from '@/types'
import { complexApiClient } from '@/api/complexApiClient'

import styles from './Reviews.module.css'

export const Reviews = () => {
  const [reviews, setReviews] = useState<TReview[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    complexApiClient<TReview[]>({ url: '/reviews' })
      .then((data) => setReviews(data))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className={styles.wrapper}>
      {isLoading && <h1 className={styles.loading}>ЗАГРУЗКА ОТЗЫВОВ ...</h1>}
      {reviews.map((review, i) => (
        <div key={i}>
          <Review review={review} />
        </div>
      ))}
    </div>
  )
}
