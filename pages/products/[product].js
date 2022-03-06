import React from 'react'
import styles from '../../styles/Product.module.css'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

export const getStaticPaths = async () => {
  const url = process.env.CMSURL
  const query = `*[_type == 'product']{id{current}}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  let paths = []

  data.result.map((param, key) => {
    paths.push({ params: { product: param.id.current } })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const url = process.env.CMSURL
  const query = `*[_type == 'product']{title,image{asset->{url}},features,description,body[]{_type,children,style,asset->{url}},useCases[]->{title,slug{current}}}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  return {
    props: {
      title: data.result[0].title,
      image: data.result[0].image,
      features: data.result[0].features,
      description: data.result[0].description,
      body: data.result[0].body,
      useCases: data.result[0].useCases,
    },
  }
}

const Product = ({ title, image, features, description, body, useCases }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src='/logo.png' />
      <ul>
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
          <button className={styles.btn}>REGISTER</button>
        </li>
        <li>
          <Link href='/login'>LOGIN</Link>
        </li>
      </ul>
      <h1 className={styles.ab}>{title}</h1>
      <p className={styles.para}>{description}</p>
      <br /> <img className={styles.blue} src={image.asset.url} />
      <br /> <br />
      <h2 className={styles.fe}> &#02008;Features </h2>
      <br />
      {features.map((feature, key) => (
        <div key={key}>
          <img className={styles.list} src='/list.png' />
          <p className={styles.line}>{feature}</p>
        </div>
      ))}
      <br /> <br />{' '}
      <p className={styles.screen}>
        <BlockContent blocks={body} />
      </p>
      <br />
      <h7 className={styles.sub}>Usecases</h7>
      <br />
      &#02008;{' '}

      {
        useCases.map((useCase,key) => 
        <button className={styles.vtl3} key={key}>
        {useCase.title}
        <br />
        &#02008;
        <Link className={styles.learn} href={`/products/usecases/${useCase.slug.current}`}>
          LEARN MORE &gt;
        </Link>{' '}
      </button>
        )
      }
      
      
      <br />
      <div className={styles.bot}>
        <ul>
          <br />
          <li>
            <strong>Information</strong>
          </li>
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
        <img src='/Ellipse 26.png' />
        <img src='/Ellipse 25.png' />
        <img src='/Ellipse 27.png' />
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

export default Product
