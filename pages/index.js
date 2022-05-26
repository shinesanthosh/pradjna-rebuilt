import ReactPlayer from 'react-player'
import React, { useState, useRef, useEffect } from 'react'

import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import Footer from '../components/footer'

export const getStaticProps = async () => {
  const clientQuery = `*[slug.current == 'home-page']{client[]{asset->{url}},partner[]{asset->{url}},testimonials[]{clientName,clientRole,testimonial,testimonialVideo{asset->{url}}},titleSlider[]{asset->{url}}}`

  const url = process.env.CMSURL

  let clients, partners, testimonials, titleSlider

  await fetch(url + '?query=' + encodeURIComponent(clientQuery))
    .then(res => res.json())
    .then(data => {
      clients = data.result[0].client
      partners = data.result[0].partner
      testimonials = data.result[0].testimonials
      titleSlider = data.result[0].titleSlider
    })

  return { props: { clients, partners, testimonials, titleSlider } }
}

const formatName = str => {
  str = str.toLowerCase()
  str = str.replace(str.charAt(0), str.charAt(0).toUpperCase())
  return str
}

export default function Home({ clients, partners, testimonials, titleSlider }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const [currentTestimonial, setCurrTest] = useState([])

  useEffect(() => {
    let tempTestimArr = []

    for (let key in testimonials) tempTestimArr.push(key == 0 ? true : false)

    setCurrTest(tempTestimArr)
  }, [])

  let vidControls = isPlaying ? 'controls' : ''
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroContainer}>
        <Menu />

        <div className={styles.titleContent}>
          <img src="/waves-bg.png" alt="" className={styles.wavesbg} />

          {titleSlider.map((slide, key) => (
            <div key={key}>
              <img src={slide.asset.url} alt="" className={styles.sliderImg} />
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
        <img src="/employee_ex.png" className={styles.empimg} />

        <h4 className={styles.emptitle}>
          Employee Productivity, Safety,Motivation
        </h4>
        <p className={styles.empdesc}>
          Human evaluations have limitations of subjectivity,bias and
          unpredictable outcomes.Pradjna platform offers data
          driven,objective,unbiased assessments of your skilled
          resources.Employees are evaluated are correlated with better
          motivation,productivity,work place safety, reduced material wastage
        </p>

        <button className={styles.bookcallbtn}>BOOK A CALL</button>
      </div>

      <div className={styles.clients}>
        <h5 className={styles.cltitle}>OUR CLIENTS</h5>
        <div className={styles.climgContainer}>
          {clients.map((client, key) => (
            <img src={client.asset.url} className={styles.climg} key={key} />
          ))}
        </div>
      </div>

      <div className={styles.platform}>
        <h5 className={styles.platitle}>One Platform,Many Applications</h5>

        <p className={styles.pladesc}>
          a unique platform With multiple applications across the Blue Collar
          segment
        </p>

        <img
          src="/driver.png"
          className={`${styles.platitleimg} ${styles.platitleimga}`}
        />
        <img
          src="/welding.png"
          className={`${styles.platitleimg} ${styles.platitleimgb}`}
        />

        <img
          src="/orange_sphere.png"
          className={`${styles.plabgsphere} ${styles.plaimgset1} ${styles.plaimg}`}
        />
        <img
          src="/insurance.png"
          className={`${styles.plaimgset1} ${styles.plaimg}`}
        />
        <img
          src="/orange_sphere.png"
          className={`${styles.plabgsphere} ${styles.plaimgset2} ${styles.plaimg}`}
        />
        <img
          src="/orange_sphere.png"
          className={`${styles.plabgsphere} ${styles.plaimgset3} ${styles.plaimg}`}
        />
        <img
          src="/orange_sphere.png"
          className={`${styles.plabgsphere} ${styles.plaimgset4} ${styles.plaimg}`}
        />

        <img
          src="/taxi.png"
          className={`${styles.plaimgset2} ${styles.plaimg}`}
        />
        <img
          src="/select.png"
          className={`${styles.plaimgset3} ${styles.plaimg}`}
        />
        <img
          src="/engineering.png"
          className={`${styles.plaimgset4} ${styles.plaimg}`}
        />

        <h6 className={`${styles.plaimgcaption1} ${styles.plaimgcaption}`}>
          User Based Insurance
        </h6>
        <h6 className={`${styles.plaimgcaption2} ${styles.plaimgcaption}`}>
          Mobility
        </h6>
        <h6 className={`${styles.plaimgcaption3} ${styles.plaimgcaption}`}>
          Enterprise Resources Management
        </h6>
        <h6 className={`${styles.plaimgcaption4} ${styles.plaimgcaption}`}>
          Skill Development
        </h6>

        <div className={styles.plabtns}>
          <button className={styles.plaseedemo}>SEE DEMO</button>
          <button className={styles.plareg}>REGISTER</button>
        </div>
      </div>

      <div className={styles.features}>
        <h3 className={styles.ftsubtl}>WHAT MAKES US UNIQUE</h3>
        <h3 className={styles.fttl}>
          We&apos;re international award winning platform
        </h3>

        <p className={styles.ftdesc}>
          Our assessment model is globally unique and cutting edge. We use
          sensor fusion - Apps, IoTs, Standard Hardware Interfaces to collect
          workplace data. Pradjna uses revolutionary Artificial General
          Intelligence (AGI) technology for data analytics. Our AGI platform
          mimics the human neo-cortex.
        </p>

        <div className={styles.fticons}>
          <img
            src="/orange_sphere.png"
            className={`${styles.ftimgbgsphere} ${styles.ftimgset1} ${styles.ftimg}`}
          />
          <img
            src="/orange_sphere.png"
            className={`${styles.ftimgbgsphere} ${styles.ftimgset2} ${styles.ftimg}`}
          />
          <img
            src="/orange_sphere.png"
            className={`${styles.ftimgbgsphere} ${styles.ftimgset3} ${styles.ftimg}`}
          />
          <img
            src="/orange_sphere.png"
            className={`${styles.ftimgbgsphere} ${styles.ftimgset4} ${styles.ftimg}`}
          />
          <img
            src="/orange_sphere.png"
            className={`${styles.ftimgbgsphere} ${styles.ftimgset5} ${styles.ftimg}`}
          />
          <img
            src="aim.png"
            className={`${styles.ftimgset1} ${styles.ftimg}`}
          />
          <img
            src="value.png"
            className={`${styles.ftimgset2} ${styles.ftimg}`}
          />
          <img
            src="open-24-hours.png"
            className={`${styles.ftimgset3} ${styles.ftimg}`}
          />
          <img
            src="data-driven.png"
            className={`${styles.ftimgset4} ${styles.ftimg}`}
          />
          <img
            src="scalability.png"
            className={`${styles.ftimgset5} ${styles.ftimg}`}
          />
          <h6 className={`${styles.ftimgcap1} ${styles.ftimgcaption}`}>
            Objective And Unbiased
          </h6>
          <h6 className={`${styles.ftimgcap2} ${styles.ftimgcaption}`}>
            Value For Money
          </h6>
          <h6 className={`${styles.ftimgcap3} ${styles.ftimgcaption}`}>
            24/7 Availability
          </h6>
          <h6 className={`${styles.ftimgcap4} ${styles.ftimgcaption}`}>
            Data Driven
          </h6>
          <h6 className={`${styles.ftimgcap5} ${styles.ftimgcaption}`}>
            Highly Scalable
          </h6>
        </div>

        <h6 className={styles.ftcontacttitle}>KNOW HOW PRADJNA FITS FOR YOU</h6>

        <button className={styles.ftbookcallbtn}>BOOK A CALL</button>

        <h6 className={`${styles.cltitle} ${styles.partitle}`}>OUR PARTNERS</h6>

        <div className={`${styles.climgContainer} ${styles.parcontainer}`}>
          {partners.map((partner, key) => (
            <img
              src={partner.asset.url}
              className={`${styles.climg} ${styles.parimg}`}
              key={key}
            />
          ))}
        </div>
      </div>

      <div className={styles.testimonials}>
        {testimonials.map((testimonial, key) => (
          <div
            className={`${
              currentTestimonial[key] ? '' : styles.disabledTestimonial
            } ${styles.testimonial}`}
            key={key}
          >
            <h6 className={styles.tesquotestart}> “</h6>
            <h6 className={styles.tesname}>
              {formatName(testimonial.clientName)} says,
            </h6>

            <h6 className={styles.tescontent}>{testimonial.testimonial}</h6>

            <h6 className={styles.tesbioname}>
              {testimonial.clientName.toUpperCase()}
            </h6>

            <h6 className={styles.tesbiorole}>{testimonial.clientRole}</h6>
            <h6 className={styles.tesquoteend}>,,</h6>

            <div className={styles.tesvideo}>
              <video
                src={testimonial.testimonialVideo.asset.url}
                preload="metadata"
                controls
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
