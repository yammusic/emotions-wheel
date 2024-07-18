import React from 'react'
import styles from './styles.module.css'

export function Wheel({ items = [], style, compact, size = 300 }) {
  const countItems = items.length
  const angle = 360 / countItems

  return (
    <div className={ styles.circle }>
      { items.map(({ name, color }, idx) => (
        <div
          key={ `fill-${name}` }
          className={ styles.slice }
          data-color={ color }
          style={{
            "--bg-color": color,
            backgroundColor: color,
            border: '1px solid black',
            transform: `rotate(${idx * angle}deg)`
          }}
        />
      ))}
      {/* <div className={ styles.slice } style={{ transform: `rotate(${angle}deg)` }}>one</div> */}
      {/* <div className={ styles.slice }>two</div> */}
      {/* <div className={ styles.slice }>three</div> */}
      {/* <div className={ styles.slice }>four</div> */}
    </div>
  )
}
