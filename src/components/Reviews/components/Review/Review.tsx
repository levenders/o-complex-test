import { FC } from 'react'
import DOMPurify from 'dompurify'

import { TReview } from '@/types'

import styles from './Review.module.css'

interface IProps {
  review: TReview
}

export const Review: FC<IProps> = ({ review }) => {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(review.text),
  })

  return (
    <div className={styles.review}>
      <span className={styles.icon}></span>
      <div dangerouslySetInnerHTML={sanitizedData()} />
    </div>
  )
}
