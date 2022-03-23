import React from 'react'
import Link from 'next/link'
import Menu from '../../components/menu'
import Footer from '../../components/footer'

import styles from '../../styles/Products.module.css'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[slug.current == 'products-page']{faqs,products[]->{title,image{asset->{url}},useCases[]->{title,slug{current}},description,id},workflow[]{asset->{url}},}`
  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  return {
    props: {
      faqs: data.result[0].faqs,
      products: data.result[0].products,
      workflow: data.result[0].workflow,
    },
  }
}

const Products = ({ workflow, products, faqs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContent}>
        <Menu mode={2} />

        <h1 className={styles.title}>
          Solving Real Life Problems for your business
        </h1>
        <p className={styles.titledesc}>
          Pradjna Offers a number of innovative solutions for the need of
          diverse business and social segments. These includes Insurance,
          Logistics, Mobility, Government and NGOs and Skill Development. Please
          click on the link to understand our diverse solutions.
        </p>
        <button className={styles.explorebtn}>EXPLORE SOLUTIONS</button>
      </div>
      <div className={styles.sbtlimgcontainer}>
        <img className={styles.sbtlimg} src="Image 6.png" />
        <img className={styles.sbtlimg} src="Image 5.png" />
      </div>

      <div className={styles.features}>
        <h2 className={styles.fttitle}>Track, Infer ,Correct</h2>

        <div className={styles.fticonscontainer}>
          <div className={styles.fticon}>
            <img className={styles.fticonimg} src="Ellipse 18.png" />

            <span className={styles.fticontext}>
              Highly Customisable
              <Link href="#">LEARN MORE &gt;</Link>
            </span>
          </div>

          <div className={styles.fticon}>
            <img src="Ellipse 19.png" />
            <span className={styles.fticontext}>
              Platform as a Service
              <Link href="#">LEARN MORE &gt;</Link>
            </span>
          </div>

          <div className={styles.fticon}>
            <img src="Ellipse 20.png" />
            <span className={styles.fticontext}>
              Dynamic and Evolving
              <Link href="#">LEARN MORE &gt;</Link>
            </span>
          </div>
        </div>

        <p className={styles.ftdesc}>
          At Pradjna, we bring specific expertise in unsupervised Motor skills
          assessments. With minimum impact to your simulator based or
          proprietary candidate data, we can do the data collection, anal on the
          candidate skills for pre-assessment screening. Similarly in-career
          performance management processes currently have limited automation.
          These assessments are generally done by individual corporate based on
          their proprietary processes. Companies face significant bottle neck
          due to limited time, scarcity of expert resources and lack of
          objectivity. These are the key gaps that are addressed by our platform
        </p>
        <p className={styles.ftdesc}>
          Also it is important to note that all major corporations world wide
          are moving away from bell curve based performance normalization to
          continuous assessments model. We believe there is a great opportunity
          to integrate our generic inference engine with corporate HR systems
          for building suitable patterns for continuous performance assessments.
        </p>

        <h3>Get to know your employees better!</h3>

        <h4>Open the gateway to your success</h4>

        <button className={styles.ftbookcallbtn}>BOOK A CALL</button>
      </div>

      <div className={styles.workflow}>
        <h3>The Workflow</h3>

        <div className={styles.workflowSlider}>
          {workflow.map((workflowItem, key) => (
            <img src={workflowItem.asset.url} key={key} />
          ))}
        </div>
      </div>

      <img className={styles.dots} src="Group 149.png" />

      {products.map((product, key) => {
        return (
          <div className={styles.box} key={key}>
            <img className={styles.usecase1} src={product.image.asset.url} />
            <div className={styles.content}>
              <h2 className={styles.welder}>{product.title}</h2>

              <p className={styles.weldp}>
                {product.description}
                <Link
                  className={styles.link}
                  href={`/products/${product.id.current}`}
                >
                  LEARN MORE
                </Link>
              </p>

              <h2 className={styles.use}>Usecases</h2>

              <ul className={`${styles.ul} ${styles.uses}`}>
                {product.useCases.map((useCase, key) => {
                  return (
                    <li className={styles.usea} key={key}>
                      <img className={styles.use1} src="Ellipse 32.png" />
                      <p className={styles.usep1}>
                        {useCase.title}

                        <Link
                          className={styles.link1}
                          href={`/products/usecases/${useCase.slug.current}`}
                        >
                          LEARN MORE
                        </Link>
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}

      <div className={styles.ques}>
        <h1 className={styles.q}>Questions?</h1>

        <h2 className={styles.qa}>We&apos;ve answered them!</h2>

        <input type="radio" id="radio1" name="radio" />
        {faqs.map((faq, key) => {
          return (
            <div key={key}>
              <label className={styles.faqlabel}>
                <h3 className={styles.qb}>
                  {faq.qn}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;
                  <img className={styles.minus} src="Group 134.png" />
                </h3>
              </label>

              <p className={styles.qp}>{faq.ans}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.start}>
        <h2 className={styles.starth}>Get started on your journey</h2>

        <p className={styles.startp}>
          Pradjna is based on a revolutionary Machine Learning framework. This
          platform can be considered a scaled down &emsp;&emsp;&emsp;version of
          the human brain with appropriate level of intelligence.
        </p>

        <button className={styles.r1} type="submit">
          REGISTER
        </button>
      </div>

      <div className={styles.bot}>
        <ul className={`${styles.ul} ${styles.botul}`}>
          <li>
            <strong>Information</strong>
          </li>

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="#">Services</Link>
          </li>

          <li>
            <Link href="#">Solution</Link>
          </li>

          <li>
            <Link href="#">FAQ</Link>
          </li>

          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>
        <ul className={`${styles.ui} ${styles.Com}`}>
          <li>
            <strong>Company</strong>
          </li>

          <li>
            <Link href="/about"> About Us</Link>
          </li>

          <li>
            <Link href="#">Contact Us</Link>
          </li>

          <li>
            <Link href="../Journal_Template/index.html">Journal</Link>
          </li>

          <li>
            <Link href="#">Register</Link>
          </li>

          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className={styles.mid}>
        <h3 className={styles.head}>pradjna</h3>

        <p className={styles.pp}>
          Pradjna is a cutting edge B2B HR performance management platform
          focused on re- engineering legacy business processes using Machine
          Learning.
        </p>

        <a href="#">
          <img src="Ellipse 26.png" />
        </a>
        <a href="#">
          <img className={styles.twit} src="Ellipse 25.png" />
        </a>
        <a href="#">
          <img className={styles.insta} src="Ellipse 27.png" />
        </a>
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

export default Products
