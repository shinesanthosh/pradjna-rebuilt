import React from 'react'
import styles from '../../../styles/UseCase.module.css'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

export const getStaticPaths = async ()=>{

  const url = process.env.CMSURL
  const query = `*[_type == 'useCase']{slug{current}}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  let paths = []

  data.result.map((param, key) => {
    paths.push({ params: { case: param.slug.current } })
  })

  return {
    paths,
    fallback: false,
  }

}

export const getStaticProps = async({params}) =>{
 
  const url = process.env.CMSURL
  const query= `*[_type == 'useCase' && slug.current == '${params.case}']{body,mainImage{asset->{url}},slug,title}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

 

  return{
    props:{
      title: data.result[0].title,
      mainImage: data.result[0].mainImage,
      body: data.result[0].body
    }
  }

} 

const useCase = ({title, body, mainImage}) => {
  return (
      <>
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
            <button className={styles.btnji}>REGISTER</button>
          </li>
          <li>
            <Link href='/login'>LOGIN</Link>
          </li>
        </ul>
        <div className={styles.h11}>
          <br />
          &#02008;&#02008;&#02008;&#02008;&#02008;
          <strong>Product Name Here</strong>
          <button className={styles.h77}>SEE &#02008; A &#02008; DEMO</button>
          <button className={styles.h88}>LEARN MORE</button>
        </div>
        <br />
        <br />{' '}
        <p className={styles.h99}>
          <strong>Product Name &gt; Use Case</strong>
        </p>
        <br />
        <h9 className={styles.h98}>
          <strong>{title}</strong>
        </h9>
        <br />
        <br />
        <br />
        <br />
        <img className={styles.dog} src={mainImage.asset.url} />
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
          <BlockContent blocks={body} />
        
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
            <br />
            <li>Services</li>
            <br />
            <br />
            <li>Solution</li>
            <br />
            <br />
            <li>FAQ</li>
            <br />
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
            <li>About Us</li>
            <br />
            <br />
            <li>Contact Us</li>
            <br />
            <br />
            <li>Journal</li>
            <br />
            <br />
            <li>Register</li>
            <br />
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
    </>
  )
}

export default useCase