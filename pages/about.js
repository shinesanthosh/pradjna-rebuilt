import React from 'react'
import Menu from '../components/menu'
import Slider from '../components/aboutSlider'
import Faq from '../components/faq'

import styles from '../styles/About.module.css'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[slug.current == 'about-page']{members[]{mname,linked,pos,image{asset->{url}}},faqs[]{qn,ans},titleSlider[]{caption,description,image{asset->{url}}}}`

  let members, faqs, titleSlider

  await fetch(url + '?query=' + encodeURIComponent(query))
    .then(res => res.json())
    .then(data => {
      members = data.result[0].members
      faqs = data.result[0].faqs
      titleSlider = data.result[0].titleSlider
    })

  return { props: { members, faqs, titleSlider } }
}

const About = ({ members, faqs, titleSlider }) => {
  return (
    <div className={styles.about}>
      <Menu mode={2} />
      <Slider data={titleSlider} />
      <div className={styles.titleContainer}>
        <h1>About Us</h1>
        <p>
          Pradjna is a cloud based platform which uses a revolutionary machine
          learning engine to evaluate human motor skills. Currently we are
          prioritizing driving skills; but the engine can handle other motor
          skills like welding, industrial painting, machining etc.
        </p>
      </div>
      <div className={styles.faqContainer}>
        <Faq faqs={faqs} />
      </div>
      <h1 className={styles.zz1}></h1>
      <strong>
        {' '}
        <h1 className={styles.cc}>Our Team</h1>
      </strong>
      <div className={styles.team}>
        {members.map((member, key) => (
          <div className={styles.member} key={key}>
            <img src={member.image.asset.url} />
            <span>{member.mname}</span>

            <span>{member.pos}</span>

            <span>{member.linked}</span>
          </div>
        ))}
      </div>
      <div>
        {' '}
        <img className={styles.abm} src="Group 178.png" />
        <img className={styles.abm} src="Group 178.png" />
        <img className={styles.abm} src="Group 178.png" />{' '}
      </div>
      <strong>
        <p className={styles.ffw}>Let&apos;s talk</p>
      </strong>
      <label className={`${styles.ss} ${styles.label}`}>Name</label>
      <input className={styles.input} type="email" id="email" size="30" />
      <label className={`${styles.ss} ${styles.label}`}>Email</label>
      <input className={styles.input} type="email" id="email" size="30" />
      <label className={`${styles.ssg} ${styles.label}`}>Message</label>
      <input
        className={`${styles.input} ${styles.sss}`}
        type="email"
        id="email"
        size="30"
      />{' '}
      <input className={styles.input} type="submit" value="Send" />
      <h1 className={styles.ere}>Visit Us</h1>
      <p className={styles.fzz}>
        Any time between Monday-Friday 9:30am to 5:30pm at
      </p>
      <strong>
        <p className={styles.jem}>Pradjna Intellisys Pvt. Ltd.</p>
      </strong>
      <p className={styles.jei}>
        Maker Village, IIIT-MK Building, Technopark, Kerala 695581
      </p>
      <div className={styles.contactmap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.7380009011521!2d76.90230792691472!3d8.557436889531646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bedb3f2eaaab%3A0xe85b8f58f4029682!2sPradjna%20Intellisys!5e0!3m2!1sen!2sin!4v1642671054215!5m2!1sen!2sin"
          width="600"
          height="450"
          styles={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <img className={styles.lstimg} src="Group 182.png" />
      <div>
        <ul className={styles.bot}>
          <li>
            <strong>Information</strong>
          </li>

          <li>Home</li>

          <li>Services</li>

          <li>Solution</li>

          <li>FAQ</li>

          <li>Privacy Policy</li>
        </ul>
        <ul className={styles.com}>
          <li>
            <strong>Company</strong>
          </li>

          <li>About Us</li>

          <li>Contact Us</li>

          <li>Journal</li>

          <li>Register</li>

          <li>Login</li>
        </ul>
      </div>
      <div className={styles.mid}>
        <h3 className={styles.head}>pradjna</h3>

        <p className={styles.pp}>
          Pradjna is a cutting edge B2B HR performance management platform
          focused on re- engineering legacy business processes using Machine
          Learning.
        </p>

        <img src="Ellipse 26.png" />
        <img src="Ellipse 25.png" />
        <img src="Ellipse 27.png" />
      </div>
      <div className={styles.lasti}>
        <h4 className={styles.gett}>Get news and updates!</h4>

        <p>Learn about growing your business.</p>

        <div className={styles.subii}>
          <input className={styles.subi} type="search" id="quary" />
          <button className={styles.aaa} value="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <p className={styles.copyi}> Copyright © Pradjna Intellisys</p>
    </div>
  )
}

export default About
