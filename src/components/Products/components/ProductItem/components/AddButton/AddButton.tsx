import { FC, HTMLAttributes } from 'react'

import styles from './AddButton.module.css'

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  count: number
  addCount: () => void
  removeCount: () => void
}

export const AddButton: FC<IProps> = ({
  addCount,
  removeCount,
  count,
  className,
  ...props
}) => {
  return (
    <div className={styles.wrapperAddButtons}>
      <button onClick={() => removeCount()} className={styles.addButton}>
        <span>-</span>
      </button>
      <span className={styles.countNum}>{count}</span>
      <button onClick={() => addCount()} className={styles.addButton}>
        <span>+</span>
      </button>
    </div>
  )
}
