import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Slider from '../components/aboutSlider'
import Faq from '../components/faq'
import Link from 'next/link'

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
      <div className={styles.team}>
        <h1>Our Team</h1>

        <div className={styles.membersContainer}>
          {members.map((member, key) => (
            <div className={styles.member} key={key}>
              <img src={member.image.asset.url} />
              <h5>{member.mname}</h5>

              <h6>{member.pos}</h6>

              <Link href={member.linked}>
                <a target="_blank">LinkedIn</a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.contact}>
        <form className={styles.contactForm}>
          <h2>Let&apos;s talk</h2>
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Message</label>
          <textarea
            className={styles.messageInput}
            name="message"
            rows={3}
            required
          />
          <input type="submit" value="Send" />
        </form>
        <div className={styles.address}>
          <h4>Visit Us</h4>
          <div className={styles.time}>
            <p>Any time between Monday-Friday 9:30am to 5:30pm at</p>
          </div>
          <p>
            <b>Pradjna Intellisys Pvt. Ltd.</b>
          </p>

          <p>Maker Village, IIIT-MK Building, Technopark, Kerala 695581</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.7380009011521!2d76.90230792691472!3d8.557436889531646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bedb3f2eaaab%3A0xe85b8f58f4029682!2sPradjna%20Intellisys!5e0!3m2!1sen!2sin!4v1642671054215!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
