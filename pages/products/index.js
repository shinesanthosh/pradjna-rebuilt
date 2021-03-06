import React from 'react'
import Link from 'next/link'
import Menu from '../../components/menu'
import Footer from '../../components/footer'
import Faq from '../../components/faq'

import styles from '../../styles/Products.module.css'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[slug.current == 'products-page']{faqs,products[]->{title,image{asset->{url}},useCases[0..2]->{title,slug{current}},description,id},workflow[]{asset->{url}},}`
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

      <div className={styles.products}>
        {products.map((product, key) => {
          return (
            <div
              className={`${styles.product} ${
                key % 2 == 0 ? styles.producta : styles.productb
              }`}
              key={key}
            >
              {key % 2 == 0 ? (
                <img className={styles.proimg} src={product.image.asset.url} />
              ) : null}
              <div className={styles.procontent}>
                <h2 className={styles.protitle}>{product.title}</h2>

                <p className={styles.prodesc}>
                  {product.description}
                  <Link href={`/products/${product.id.current}`}>
                    <a className={styles.prolink}>LEARN MORE &gt;</a>
                  </Link>
                </p>

                <h2 className={styles.useCaseTitle}>Usecases</h2>

                <ul className={styles.useCaseList}>
                  {product.useCases.map((useCase, key) => {
                    return (
                      <li className={styles.useCase} key={key}>
                        <img
                          className={styles.useCaseimg}
                          src="Ellipse 32.png"
                        />
                        <p className={styles.useCaseName}>
                          {useCase.title}

                          <Link
                            href={`/products/${product.id.current}/${useCase.slug.current}`}
                          >
                            <a className={styles.useCaseLink}>
                              LEARN MORE &gt;
                            </a>
                          </Link>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
              {key % 2 != 0 ? (
                <img className={styles.proimg} src={product.image.asset.url} />
              ) : null}
            </div>
          )
        })}
      </div>
      <div className={styles.faq}>
        <h1>Questions?</h1>
        <h2>We&apos;ve answered them!</h2>

        <Faq faqs={faqs} />
      </div>

      <div className={styles.end}>
        <h2 className={styles.endtitle}>Get started on your journey</h2>

        <p className={styles.enddesc}>
          Pradjna is based on a revolutionary Machine Learning framework. This
          platform can be considered a scaled down version of the human brain
          with appropriate level of intelligence.
        </p>
        <Link href="/register">
          <a className={styles.endreg}>REGISTER</a>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Products
