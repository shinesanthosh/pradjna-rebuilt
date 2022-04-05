import React, { useState, useEffect } from 'react'
import styles from '../styles/Faq.module.css'

const Faq = ({ faqs }) => {
  const [expanded, setExpanded] = useState([])

  useEffect(() => {
    let tempArr = []
    for (let key in faqs) tempArr.push(key == 0 ? true : false)

    setExpanded(tempArr)
  }, [])

  const expansionHandler = key => {
    let tempArr = []
    for (let i in faqs) tempArr.push(key == i ? true : false)
    setExpanded(tempArr)
  }

  return faqs.map((faq, key) => {
    return (
      <div
        className={styles.faq}
        key={key}
        onClick={() => {
          expansionHandler(key)
        }}
      >
        <h3 className={`${styles.qn} ${expanded[key] ? styles.expanded : ''}`}>
          {faq.qn}
        </h3>

        <p
          className={styles.ans}
          style={{ display: expanded[key] ? 'block' : 'none' }}
        >
          {faq.ans}
        </p>
      </div>
    )
  })
}

export default Faq
