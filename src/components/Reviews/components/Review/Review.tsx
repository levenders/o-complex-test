import { FC } from 'react'
import DOMPurify from 'dompurify'

import { TReview } from '@/types'

interface IProps {
  review: TReview
}

export const Review: FC<IProps> = ({ review }) => {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(review.text),
  })

  return <div dangerouslySetInnerHTML={sanitizedData()} />
}
