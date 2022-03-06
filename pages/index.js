import ReactPlayer from 'react-player'
import React, { useState } from 'react'

import styles from '../styles/Home.module.css'
import Menu from '../components/menu'

export const getStaticProps = async () => {
  const clientQuery = `*[slug.current == 'home-page']{client[]{asset->{url}},partner[]{asset->{url}},testimonials[]{clientName,clientRole,testimonial,testimonialVideo{asset->{url}}},titleSlider[]{asset->{url}}}`

  const url = process.env.CMSURL

  let clients, partners, testimonials, titleSlider

  await fetch(url + '?query=' + encodeURIComponent(clientQuery))
    .then((res) => res.json())
    .then((data) => {
      clients = data.result[0].client
      partners = data.result[0].partner
      testimonials = data.result[0].testimonials
      titleSlider = data.result[0].titleSlider
    })

  return { props: { clients, partners, testimonials, titleSlider } }
}

const formatName = (str) => {
  str = str.toLowerCase()
  str = str.replace(str.charAt(0), str.charAt(0).toUpperCase())
  return str
}

export default function Home({ clients, partners, testimonials, titleSlider }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heroContainer}>
          <Menu />

          <div className={styles.titleContent}>
            <img
              src='/waves-bg.png'
              alt=''
              className={styles.wavesbg}
            />

            {titleSlider.map((slide, key) => (
              <div key={key}>
                <img
                  src={slide.asset.url}
                  alt=''
                  className={styles.sliderImg}
                />
              </div>
            ))}
          </div>

          <p>BLUE COLLAR ANALYTICS PLATFORM</p>

          <div className={styles.titleDescGrp}>
            <h4>THE APP YOU&apos;LL NEED FOR</h4>
            <h1>Better Insights On Your Workforce</h1>
            <button className={styles.bookbtn}>BOOK A DEMO</button>
            <button className={styles.regbtn}>REGISTER</button>
          </div>
        </div>

        <div className={styles.employee}>
          <img src='/Image 2.png' className={styles.jemind} />
          <h4 className={styles.emp}>
            Employee Productivity,
            <br /> Safety,Motivation
          </h4>
          <br />{' '}
          <p2>
            Human evaluations have limitations of subjectivity,bias
            <br />
            and unpredictable outcomes.Pradjna platform offers
            <br />
            data driven,objective,unbiased assessments of your
            <br />
            skilled resources.Employees are evaluated are correlated with
            <br />
            better motivation,productivity,work place safety,
            <br />
            reduced material wastage
          </p2>
          <br /> <br /> <br />{' '}
          <button className={styles.booka}>BOOK A CALL</button>
          <br />
          <br /> <br />
          <h5 className={styles.cli}>OUR CLIENTS</h5>
          <div className={styles.cm}>
            <br />
            {clients.map((client, key) => (
              <img src={client.asset.url} className={styles.img4} key={key} />
            ))}
          </div>
        </div>
        <div className={styles.platform}>
          <h5 className={styles.plat}>
            {' '}
            One Platform,Many <br />
            Applications
          </h5>
          <br />{' '}
          <p3>
            a unique platform With multiple applications across the Blue <br />{' '}
            &#8200; &#8200; &#8200; &#8200; &#8200; &#8200; &#8200; &#8200;
            &#8200; &#8200; Collar segment
          </p3>
        </div>

        <img src='/Image 3.png' className={styles.img8} />

        <div className='age'>
          <img src='/Image 1.png' className={styles.img9} />
          <img src='/Ellipse 2.png' className={styles.img10} />
          <img src='/Ellipse 2.png' className={styles.img10} />
          <img src='/Ellipse 2.png' className={styles.img10} />
          <img src='/Ellipse 2.png' className={styles.img10} />
          <img src='/insurance (1).png' className={styles.img11} />
          <img src='/taxi.png' className={styles.img12} />
          <img src='/select.png' className={styles.img12} />{' '}
          <img src='/engineering.png' className={styles.img12} />
        </div>
        <div className={styles.achachan}>
          <h6 className={styles.h6}>User Based &#8200; Insurance</h6>
          <h6 className={styles.myachu}> Mobility</h6>
          <h6 className={styles.maachu}>
            Enterprise Resources
            <br />
            &#8200;&#8200; Management
          </h6>
          <h6 className={styles.maaachu}>
            {' '}
            &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;Skill <br />
            Development
          </h6>
        </div>

        <div className={styles.dem}>
          <button className={styles.SEE}>SEE DEMO</button>
          <button className={styles.regi}>REGISTER</button>
        </div>

        <div>
          <h3 className={styles.txt}>WHAT MAKE US UNIQUE</h3>
          <h3 className={styles.txta}>
            We&apos;re international award
            <br />
            &#8200;&#8200;&#8200;&#8200;&#8200;winning platform
          </h3>
        </div>

        <br />
        <br />
        <p4>
          &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;Our
          assessment model is globally unique and cutting edge. We use sensor
          fusion - Apps, IoTs, Standard
          <br />
          &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;Hardware
          Interfaces to collect workplace data. Pradjna uses revolutionary
          Artificial General Intelligence
          <br />
          &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;(AGI)
          technology for data analytics. Our AGI platform mimics the human
          neo-cortex.{' '}
        </p4>

        <div className={styles.era}>
          <img src='Ellipse 2.png' className={styles.img101} />
          <img src='Ellipse 2.png' className={styles.img101} />{' '}
          <img src='Ellipse 2.png' className={styles.img101} />{' '}
          <img src='Ellipse 2.png' className={styles.img101} />{' '}
          <img src='Ellipse 2.png' className={styles.img101} />
          <div className='kuu'>
            <img src='aim.png' className={styles.img111} />{' '}
            <img src='value.png' className={styles.img111} />{' '}
            <img src='open-24-hours.png' className={styles.img111} />{' '}
            <img src='data-driven.png' className={styles.img111} />{' '}
            <img src='scalability.png' className={styles.img111} />
          </div>
          <div className='hello'>
            <h7 className='h7'>
              <br />
              &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;Objective
              And
              <br />
              &#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;&#8200;Unbiased
            </h7>
            <div className={styles.chin}>
              <h8 className={styles.hii}>Value For Money</h8>
              <h8 className={styles.hiia}>24/7 Availability</h8>
              <h8 className={styles.hiib}>Data Driven</h8>
              <h8 className={styles.hiic}>Highly Scalable</h8>
            </div>

            <div className={styles.know}>
              <br />
              <br />
              <h7 className={styles.fits}>KNOW HOW PRADJNA FITS FOR YOU</h7>
              <br />
              <br />
              <button className={styles.bookc}>BOOK A CALL</button>

              <br />
              <br />
              <br />
              <br />
              <h7 className={styles.part}>OUR PARTNERS</h7>
            </div>
          </div>
          <div className={styles.mama}>
            {partners.map((partner, key) => (
              <img src={partner.asset.url} className={styles.imgaa} key={key} />
            ))}
          </div>
          <br />
          <br />
          {testimonials.map((testimonial, key) => (
            <div className={styles.jjj} key={key}>
              <br />
              <br />
              <h7 className={styles.blank}> “</h7>

              <br />
              <br />
              <h7 className={styles.blank}>
                <b>{formatName(testimonial.clientName)} says,</b>
              </h7>
              <br />
              <br />
              <h7 className={styles.blaa}>{testimonial.testimonial}</h7>

              <br />
              <br />
              <br />
              <h7 className={styles.abc}>
                {testimonial.clientName.toUpperCase()}
              </h7>
              <div className={styles.abb}>
                <br />
                <br />
                <h7 className={styles.abcd}>{testimonial.clientRole}</h7>

                <br />
                <br />
                <h7 className={styles.blankk}>,,</h7>
              </div>

              {/* <video width='320' height='240' autoPlay muted>
                <source src={testimonial.testimonialVideo.asset.url} type='video/mp4' />
                Your browser does not support the video tag.
              </video> */}

              <div
                onClick={() => {
                  setIsPlaying(!isPlaying)
                  setIsMuted(false)
                }}>
                <ReactPlayer
                  url={testimonial.testimonialVideo.asset.url}
                  width={320}
                  height={240}
                  loop={true}
                  playing={isPlaying}
                  muted={isMuted}
                />
              </div>
            </div>
          ))}
        </div>

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
              <a href='#'>About Us</a>
            </li>
            <br />
            <li>
              <a href='#'>Contact Us</a>
            </li>
            <br />
            <li>
              <a href='#'>Journal</a>
            </li>
            <br />
            <li>
              <a href='#'>Register</a>
            </li>
            <br />
            <li>
              <a href='#'>Login</a>
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
          <img src='Ellipse 26.png' className={styles.imej} width='20px' />
          <img src='Ellipse 25.png' className={styles.imej} width='20px' />
          <img src='Ellipse 27.png' className={styles.imej} width='20px' />
          <br />
        </div>
        <div className={styles.lasti}>
          <h4 className={styles.gett}>Get news and updates!</h4>
          <br />
          <p10>Learn about growing your business.</p10>
          <br />
          <div className={styles.subii}>
            <input className={styles.subi} type='search' id='quary' />
            <button className={styles.aaa} value='submit'>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <br />
        <p11 className={styles.copyi}> Copyright © Pradjna Intellisys</p11>
      </div>
    </>
  )
}
