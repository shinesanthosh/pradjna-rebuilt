import React from 'react'
import Menu from '../components/menu'

import styles from '../styles/About.module.css'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[slug.current == 'about-page']{members[]{mname,linked,pos,image{asset->{url}}},faqs[]{qn,ans},titleSlider[]{caption,description,image{asset->{url}}}}`

  let members, faqs, titleSlider

  await fetch(url + '?query=' + encodeURIComponent(query))
    .then((res) => res.json())
    .then((data) => {
      members = data.result[0].members
      faqs = data.result[0].faqs
      titleSlider = data.result[0].titleSlider
    })

  return { props: { members, faqs, titleSlider} }
}

const About = ({ members, faqs, titleSlider}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src='logo.png' />
      <Menu btnclass={styles.btnji} />
      <div className={styles.slider}>
        <figure>
          {titleSlider.map((slide,key)=><div key={key}>
            <img className={styles.ttt} src={slide.image.asset.url} />
            <h5>{slide.caption}</h5>
            <p>{slide.description}</p>
          </div>)}
          
          
        </figure>
      </div>
      <br />
      <br />
      <br />
      <strong>
        {' '}
        <h1 className={styles.ggy}>About Us</h1>
        <br />
        <br />
      </strong>
      <p className={styles.bbi}>
        Pradjna is a cloud based platform which uses a revolutionary machine
        learning engine to evaluate
        <br />
        &#8200; &#8200; human motor skills. Currently we are prioritizing
        driving skills; but the engine can handle other
        <br />
        &#8200; &#8200; &#8200; &#8200; &#8200; &#8200; &#8200; &#8200; &#8200;
        &#8200; &#8200; &#8200; motor skills like welding, industrial painting,
        machining etc.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {faqs.map((faq, key) => (
        <div key={key}>
          <p className={styles.hjk}>{faq.qn}</p>{' '}
          <p className={styles.mmm}>{faq.ans}</p>
          <img className={styles.im} src='Group 134.png' />
        </div>
      ))}
      <h1 className={styles.zz1}></h1>
      <br />
      <br />
      <br />
      <br />
      <strong>
        {' '}
        <h1 className={styles.cc}>Our Team</h1>
      </strong>
      <br />
      <br />
      <div className={styles.team}>
        {members.map((member, key) => (
          <div className={styles.member} key={key}>
            <img src={member.image.asset.url} />
            <span>{member.mname}</span>
            <br />
            <span>{member.pos}</span>
            <br />
            <span>{member.linked}</span>
            <br />
          </div>
        ))}
      </div>
      <br />
      <div>
        &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;{' '}
        <img className={styles.abm} src='Group 178.png' />
        <img className={styles.abm} src='Group 178.png' />
        <img className={styles.abm} src='Group 178.png' />{' '}
      </div>
      <br />
      <br />
      <strong>
        <p className={styles.ffw}>Let&apos;s talk</p>
      </strong>
      <br />
      <br />
      <label className={`${styles.ss} ${styles.label}`}>Name</label>
      <input className={styles.input} type='email' id='email' size='30' />
      <br />
      <br />
      <br />
      <label className={`${styles.ss} ${styles.label}`}>Email</label>
      <input className={styles.input} type='email' id='email' size='30' />
      <br />
      <br />
      <br />
      <label className={`${styles.ssg} ${styles.label}`}>Message</label>
      <input
        className={`${styles.input} ${styles.sss}`}
        type='email'
        id='email'
        size='30'
      />{' '}
      <br />
      <br />
      <br />
      <input className={styles.input} type='submit' value='Send' />
      <h1 className={styles.ere}>Visit Us</h1>
      <br />
      <br />
      <p className={styles.fzz}>
        Any time between Monday-Friday 9:30am to
        <br /> 5:30pm at
      </p>
      <br />
      <strong>
        <p className={styles.jem}>Pradjna Intellisys Pvt. Ltd.</p>
      </strong>
      <br />
      <p className={styles.jei}>
        Maker Village, IIIT-MK Building, Technopark, Kerala
        <br />
        695581
      </p>
      <div className={styles.contactmap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.7380009011521!2d76.90230792691472!3d8.557436889531646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bedb3f2eaaab%3A0xe85b8f58f4029682!2sPradjna%20Intellisys!5e0!3m2!1sen!2sin!4v1642671054215!5m2!1sen!2sin" width="600" height="450" styles={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
      <br />
      <br />
      <br />
      <img className={styles.lstimg} src='Group 182.png' />
      <br />
      <br />
      <br />
      <div>
        <ul className={styles.bot}>
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
        <ul className={styles.com}>
          <br />
          <li>
            <strong>Company</strong>
          </li>
          <br />
          <br />
          <li>About Us</li>
          <br />
          <li>Contact Us</li>
          <br />
          <li>Journal</li>
          <br />
          <li>Register</li>
          <br />
          <li>Login</li>
          <br />
        </ul>
      </div>
      <div className={styles.mid}>
        <br />
        <br />
        <h3 className={styles.head}>pradjna</h3>
        <br />
        <p className={styles.pp}>
          Pradjna is a cutting edge B2B HR performance
          <br /> management platform focused on re-
          <br />
          engineering legacy business processes using <br />
          Machine Learning.
        </p>
        <br />
        <img src='Ellipse 26.png' />
        <img src='Ellipse 25.png' />
        <img src='Ellipse 27.png' />
        <br />
      </div>
      <div className={styles.lasti}>
        <h4 className={styles.gett}>Get news and updates!</h4>
        <br />
        <p>Learn about growing your business.</p>
        <br />
        <div className={styles.subii}>
          <input className={styles.subi} type='search' id='quary' />
          <button className={styles.aaa} value='submit'>
            SUBSCRIBE
          </button>
        </div>
      </div>
      <p className={styles.copyi}> Copyright © Pradjna Intellisys</p>
    </div>
  )
}

export default About
