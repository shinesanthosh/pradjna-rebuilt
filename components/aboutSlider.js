import React, { useState, useEffect } from 'react'
import styles from '../styles/Slider.module.css'

const Slider = ({ data }) => {
  const [pos, setPos] = useState(0)

  const maxPos = data.length - 1
  const posChangeHandler = operation => {
    if (operation) setPos(pos + 1 > maxPos ? 0 : pos + 1)
    else setPos(pos - 1 < 0 ? maxPos : pos - 1)
  }

  let dotArray = []
  for (let i = 0; i <= maxPos; i++)
    dotArray.push(
      <div
        className={`${styles.dot} ${i == pos ? styles.dotActive : ''}`}
        key={i}
      >
        {' '}
      </div>
    )
  return (
    <div className={styles.slider}>
      <img src={data[pos].image.asset.url} />
      <div className={styles.textNControl}>
        <div className={styles.captions}>
          <h5>{data[pos].caption}</h5>
          <p>{data[pos].description}</p>
        </div>
        <div className={styles.sliderControl}>
          <div className={styles.controls}>
            <div
              className={styles.button}
              onClick={() => {
                posChangeHandler(false)
              }}
            >
              &lt;
            </div>

            <div
              className={styles.button}
              onClick={() => {
                posChangeHandler(true)
              }}
            >
              &gt;
            </div>
          </div>
          <div className={styles.dotContainer}>{dotArray}</div>
        </div>
      </div>
    </div>
  )
}

export default Slider
