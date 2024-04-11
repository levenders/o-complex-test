'use client'

import { useState, useEffect } from 'react'

import { Review } from './components/Review'
import { TReview } from '@/types'
import { complexApiClient } from '@/api/complexApiClient'

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
    <div>
      {isLoading && <h1>LOADING</h1>}
      {reviews.map((review) => (
        <div key={review.id}>
          <Review review={review} />
        </div>
      ))}
    </div>
  )
}
