import React from 'react'
import Link from 'next/link'

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
    <>
      <div className={styles.top}>
        <img className={styles.logo} src='Group 243.png ' />
        <ul className={styles.ul}>
          <li>
            <Link href='/about'>ABOUT US</Link>
          </li>
          <li>
            <Link href='/products'>PRODUCTS</Link>
          </li>
          <li>
            <Link href='/blog'>BLOG</Link>
          </li>
          <li>
            <Link href='/register'>
              <button className={styles.reg}>REGISTER</button>
            </Link>
          </li>
          <li>
            <Link href='/login'>LOG IN</Link>
          </li>
        </ul>
      </div>
      <h1>
        Solving Real Life Problems for <br />
        &#8200;&#8200;&#8200;&emsp;&emsp; your buisness
      </h1>
      <p className={styles.topp}>
        Pradjna Offers a number of innovative solutions for the need of diverse
        business and social
        <br />
        segments. These includes Insurance, Logistics, Mobility, Government and
        NGOs and Skill <br />
        Development. Please click on the link to understand our diverse
        solutions.
      </p>
      <br />
      <button className={styles.button}>EXPLORE SOLUTIONS</button>
      <br />
      <img className={styles.image} src='Image 6.png' />
      <img className={styles.image1} src='Image 5.png' />
      <br /> <br />
      <h2 className={styles.header}>Track, Infer ,Correct</h2>
      <ul className={`${styles.ul} ${styles.ellip}`}>
        <li className={styles.img1}>
          <img className={styles.el1} src='Ellipse 18.png' />
          <p className={styles.p1}>
            {' '}
            <bold>
              Highly <br />
              Customisable
            </bold>{' '}
            <br />
            <a className={styles.learn} href='#'>
              LEARN MORE{' '}
            </a>
          </p>
        </li>
        <li className={styles.img2}>
          <img src='Ellipse 19.png' />
          <p className={styles.p2}>
            Platform as a <br /> Service <br />
            <a className={styles.learn} href='#'>
              LEARN MORE{' '}
            </a>
          </p>
        </li>
        <li className={styles.img3}>
          <img src='Ellipse 20.png' />
          <p className={styles.p3}>
            Dynamic and <br /> Evolving <br />
            <a className={styles.learn} href='#'>
              LEARN MORE{' '}
            </a>
          </p>
        </li>
      </ul>
      <p className={styles.para}>
        At Pradjna, we bring specific expertise in unsupervised Motor skills
        assessments. With minimum impact to your <br />
        simulator based or proprietary candidate data, we can do the data
        collection, anal on the candidate <br />
        skills for pre-assessment screening. Similarly in-career performance
        management processes currently have limited <br />
        automation. These assessments are generally done by individual corporate
        based on their proprietary processes.
        <br />
        Companies face significant bottle neck due to limited time, scarcity of
        expert resources and lack of objectivity. These
        <br /> are the key gaps that are addressed by our platform
        <br />
        <br />
        Also it is important to note that all major corporations world wide are
        moving away from bell curve based
        <br /> performance normalization to continuous assessments model. We
        believe there is a great opportunity to integrate
        <br /> our generic inference engine with corporate HR systems for
        building suitable patterns for continuous performance <br />
        assessments.
      </p>
      <br />
      <br />
      <h2 className={styles.get}>Get to know your employees better!</h2>
      <br />
      <h3 className={styles.open}>Open the gateway to your success</h3>
      <br />
      <br />
      <button className={styles.book}>BOOK A CALL</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className={styles.work}>The Workflow</h3>
      <br />
      <br />
      <div className={styles.slider}>
        <figure>
          {workflow.map((workflowItem, key) => (
            <img src={workflowItem.asset.url} key={key} />
          ))}
        </figure>
      </div>
      <br />
      <br />
      <img className={styles.dots} src='Group 149.png' />
      <br />
      <br />
      {products.map((product, key) => {
        

        return (
          <div className={styles.box} key={key}>
            <img className={styles.usecase1} src={product.image.asset.url} />
            <div className={styles.content}>
              <h2 className={styles.welder}>{product.title}</h2>
              <br />
              <p className={styles.weldp}>
                {product.description}
                <br />{' '}
                <Link
                  className={styles.link}
                  href={`/products/${product.id.current}`}>
                  LEARN MORE
                </Link>
              </p>
              <br />
              <h2 className={styles.use}>Usecases</h2>
              <br />
              <br />
              <ul className={`${styles.ul} ${styles.uses}`}>
                {product.useCases.map((useCase, key) => {
                  return (
                    <li className={styles.usea} key={key}>
                      <img className={styles.use1} src='Ellipse 32.png' />
                      <p className={styles.usep1}>
                        {useCase.title}
                        <br />
                        <Link
                          className={styles.link1}
                          href={`/products/usecases/${useCase.slug.current}`}>
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
      <br />
      <br />
      <br />
      <div className={styles.ques}>
        <h1 className={styles.q}>Questions?</h1>
        <br />
        <h2 className={styles.qa}>We&apos;ve answered them!</h2>
        <br />
        <br />
        <input type='radio' id='radio1' name='radio' />
        {faqs.map((faq, key) => {
          return (
            <div key={key}>
              <label className={styles.faqlabel}>
                <h3 className={styles.qb}>
                  {faq.qn}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;
                  <img className={styles.minus} src='Group 134.png' />
                </h3>
              </label>
              <br />
              <br />
              <p className={styles.qp}>{faq.ans}</p>
            </div>
          )
        })}
        <br />
        <br /> <br />
        <br />
        <br />
      </div>
      <div className={styles.start}>
        <h2 className={styles.starth}>Get started on your journey</h2>
        <br />
        <br />
        <br />
        <p className={styles.startp}>
          Pradjna is based on a revolutionary Machine Learning framework. This
          platform can be considered a scaled down
          <br /> &emsp;&emsp;&emsp;version of the human brain with appropriate
          level of intelligence.{' '}
        </p>
        <br />
        <br />
        <button className={styles.r1} type='submit'>
          {' '}
          REGISTER
        </button>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.bot}>
        <ul className={`${styles.ul} ${styles.botul}`}>
          <br />
          <li>
            <strong>Information</strong>
          </li>
          <br />
          <br />
          <li>
            {' '}
            <Link href='/'>Home</Link>
          </li>
          <br />
          <li>
            {' '}
            <Link href='#'>Services</Link>
          </li>
          <br />
          <li>
            {' '}
            <Link href='#'>Solution</Link>
          </li>
          <br />
          <li>
            {' '}
            <Link href='#'>FAQ</Link>
          </li>
          <br />
          <li>
            {' '}
            <Link href='#'>Privacy Policy</Link>
          </li>
        </ul>
        <ul className={`${styles.ui} ${styles.Com}`}>
          <br />
          <li>
            <strong>Company</strong>
          </li>
          <br />
          <br />
          <li>
            <Link href='/about'> About Us</Link>
          </li>
          <br />
          <li>
            <Link href='#'>Contact Us</Link>
          </li>
          <br />
          <li>
            <Link href='../Journal_Template/index.html'>Journal</Link>
          </li>
          <br />
          <li>
            <Link href='#'>Register</Link>
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
        <p className={styles.pp}>
          Pradjna is a cutting edge B2B HR performance
          <br /> management platform focused on re-
          <br />
          engineering legacy business processes using <br />
          Machine Learning.
        </p>
        <br />
        <a href='#'>
          <img src='Ellipse 26.png' />{' '}
        </a>
        <a href='#'>
          <img className={styles.twit} src='Ellipse 25.png' />
        </a>
        <a href='#'>
          <img className={styles.insta} src='Ellipse 27.png' />
        </a>
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
      <br />
      <p className={styles.copyi}> Copyright © Pradjna Intellisys</p>
    </>
  )
}

export default Products
