import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Menu.module.css'

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.menuContainer}>
      <Link href="/">
        <img className={isOpen ? '' : styles.logo} src="logo.png" alt="Logo" />
      </Link>
      <img
        className={styles.ham}
        src={isOpen ? '/close.png' : '/hamburger.png'}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      />
      <ul
        className={isOpen ? `${styles.navopen} ${styles.navul}` : styles.navul}
      >
        <li>
          <Link href="/about">
            <a className={props.mode != 2 ? styles.navbtn : styles.navbtn2}>
              ABOUT US
            </a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className={props.mode != 2 ? styles.navbtn : styles.navbtn2}>
              PRODUCTS
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={props.mode != 2 ? styles.navbtn : styles.navbtn2}>
              BLOG
            </a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a className={props.mode != 2 ? styles.regbtn : styles.regbtn2}>
              REGISTER
            </a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a className={props.mode != 2 ? styles.navbtn : styles.navbtn2}>
              LOGIN
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
