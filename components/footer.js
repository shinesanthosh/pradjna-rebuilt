import React from 'react'

import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.bot}>
        <ul>
          <br />
          <li>
            <strong>Information</strong>
          </li>
          <br />
          <br />
          <li>Home</li>
          <br />
          <li>Services</li>
          <br />
          <li>Solution</li>
          <br />
          <li>FAQ</li>
          <br />
          <li>Privacy Policy</li>
        </ul>
        <ul className={styles.Com}>
          <br />
          <li>
            <strong>Company</strong>
          </li>
          <br />
          <br />
          <li>
            <a href="#">About Us</a>
          </li>
          <br />
          <li>
            <a href="#">Contact Us</a>
          </li>
          <br />
          <li>
            <a href="#">Journal</a>
          </li>
          <br />
          <li>
            <a href="#">Register</a>
          </li>
          <br />
          <li>
            <a href="#">Login</a>
          </li>
          <br />
        </ul>
      </div>
      <div className={styles.mid}>
        <br />
        <br />
        <h3 className={styles.head}>pradjna</h3>
        <br />
        <p9 className={styles.manual}>
          Pradjna is a cutting edge B2B HR performance
          <br /> management platform focused on re-
          <br />
          engineering legacy business processes using <br />
          Machine Learning.
        </p9>
        <br />
        <img src="Ellipse 26.png" className={styles.imej} width="20px" />
        <img src="Ellipse 25.png" className={styles.imej} width="20px" />
        <img src="Ellipse 27.png" className={styles.imej} width="20px" />
        <br />
      </div>
      <div className={styles.lasti}>
        <h4 className={styles.gett}>Get news and updates!</h4>
        <br />
        <p10>Learn about growing your business.</p10>
        <br />
        <div className={styles.subii}>
          <input className={styles.subi} type="search" id="quary" />
          <button className={styles.aaa} value="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <br />
      <p11 className={styles.copyi}> Copyright © Pradjna Intellisys</p11>
    </div>
  )
}

export default Footer
