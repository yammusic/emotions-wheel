import React from 'react'
import styles from './styles.module.css'

type Props = {
  items: {
    name: string
    color: string
    main?: string
    flip?: boolean
  }[]
  style?: React.CSSProperties
  compact?: boolean
  size?: number
}

export function Wheel({ items = [], style, compact, size = 300 }: Props) {
  const countItems = items.length
  const angle = 360 / countItems

  return (
    <div
      className={ styles.wheel }
      style={{
        "--size": `${size}px`,
        "--angle": `${angle}deg`,
        "--border-color": 'white',
        "--border-size": '3px',
        ...style,
      } as React.CSSProperties}
    >
      {/* Fill color */}
      { items.map(({ name, color, flip }, idx) => (
        <div
          key={ `fill-${name}` }
          className={ styles.fill }
          data-color={ color }
          data-name={ name }
          style={{
            "--bg-color": color,
            transform: `rotate(${idx * angle}deg)`
          } as React.CSSProperties}
        />
      )) }

      {/* Lines */}
      { new Array(countItems / 2).fill(0).map((_, idx) => (
        <div
          key={ `line-${idx}` }
          className={ styles.line }
          style={{
            transform: `rotate(${(idx * angle) + (compact ? 0 : angle / 2)}deg)`
          }}
        />
      ))}

      {/* Content */}
      { items.map(({ name, flip }, idx) => (
        <div
          key={ `content-${name}` }
          className={ styles.content }
          style={{
            transform: `rotate(${(idx * angle) + (angle / 2)}deg)`,
          }}
        >
          <span
            className={ `${styles.label} ${compact ? styles.compact : ''}` }
            style={{
              fontSize: compact ? '18px' : '24px',
              marginTop: compact ? '2rem' : '4px',
              transform: !compact ? `rotate(0deg)` : `rotate(${flip ? 270 : 90}deg)`,
            }}
          >
            { name }
          </span>
        </div>
      )) }
    </div>
  )
}
