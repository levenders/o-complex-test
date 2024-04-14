import { FC, HTMLAttributes } from 'react'

import styles from './AddButton.module.css'

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  count: number
  addCount: () => void
  removeCount: () => void
  onChangeCount: (count: number) => void
}

export const AddButton: FC<IProps> = ({
  addCount,
  removeCount,
  onChangeCount,
  count,
  className,
  ...props
}) => {
  return (
    <div className={styles.wrapperAddButtons}>
      <button onClick={() => removeCount()} className={styles.addButton}>
        <span>-</span>
      </button>
      <input
        className={styles.countNum}
        value={count}
        onChange={(e) => onChangeCount(e.target.value)}
      />
      <button onClick={() => addCount()} className={styles.addButton}>
        <span>+</span>
      </button>
    </div>
  )
}
