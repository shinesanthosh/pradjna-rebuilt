import React from 'react'
import Link from 'next/link'

import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.navbar}>
        <ul className={styles.information}>
          <li>
            <strong>Information</strong>
          </li>

          <li>
            <Link href="/"> Home</Link>
          </li>

          <li>
            <Link href="/products"> Services</Link>
          </li>

          <li>
            <Link href="/products"> Solution</Link>
          </li>

          <li>
            <Link href="/products"> FAQ</Link>
          </li>

          <li>
            <Link href="#"> Privacy Policy</Link>
          </li>
        </ul>
        <ul className={styles.company}>
          <li>
            <strong>Company</strong>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/contact">Contact Us</Link>
          </li>

          <li>
            <Link href="/blog">Journal</Link>
          </li>

          <li>
            <Link href="/register">Register</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className={styles.about}>
        <h3 className={styles.abouttitle}>pradjna</h3>

        <p className={styles.aboutdesc}>
          Pradjna is a cutting edge B2B HR performance management platform
          focused on re- engineering legacy business processes using Machine
          Learning.
        </p>

        <img src="/Ellipse 26.png" className={styles.aboutimg} />
        <img src="/Ellipse 25.png" className={styles.aboutimg} />
        <img src="/Ellipse 27.png" className={styles.aboutimg} />
      </div>
      <div className={styles.subscribe}>
        <h4 className={styles.substitle}>Get news and updates!</h4>

        <p>Learn about growing your business.</p>

        <input className={styles.subsemail} type="search" id="quary" />
        <button className={styles.subsubmit} value="submit">
          SUBSCRIBE
        </button>
      </div>

      <p className={styles.copyright}> Copyright © Pradjna Intellisys</p>
    </div>
  )
}

export default Footer
