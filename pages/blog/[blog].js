import React from 'react'
import styles from '../../styles/Post.module.css'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

export const getStaticPaths = async () => {
  const url = 'https://2nyhcgtj.api.sanity.io/v2021-10-21/data/query/production'
  const query = `*[_type == 'post']{slug{current}}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  let paths = []

  data.result.map((param, key) => {
    paths.push({ params: { blog: param.slug.current } })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const url = 'https://2nyhcgtj.api.sanity.io/v2021-10-21/data/query/production'
  const query = `*[_type == 'post' && slug.current == '${params.blog}']{categories[]->{title},author->{name},publishedAt,title,mainImage{asset->{url}},body,slug{current}}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

let date = new Date(data.result[0].publishedAt).toDateString()


  return {
    props: {
      author: data.result[0].author.name,
      body: data.result[0].body,
      categories: data.result[0].categories,
      mainImage: data.result[0].mainImage,
      slug: data.result[0].slug,
      title: data.result[0].title,
      date
    },
  }
}

const Posts = ({
  author,
  body,
  categories,
  mainImage,
  
  slug,
  title,
  date
}) => {


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
        <h1 className={styles.gg}>journey</h1>
        <form>
          <div>
            <input
              className={styles.kk}
              type='search'
              placeholder='search....'
            />{' '}
            <button type='submit' className={styles.mm}>
              GO
            </button>
          </div>
        </form>
        <h1 className={styles.kkk}></h1>
        <h1 className={styles.ff}>← BACK TO BLOG</h1>
        <br />
        <p className={styles.zz}>Journal &gt;{categories[0].title}</p>
        <br />
        <h1 className={styles.aa}>{title}</h1>
        <br />
        <p className={styles.ll}>By {author} | {date}</p>
        <br />
        <img className={styles.dog} src={mainImage.asset.url} />
        
        <br />
        <BlockContent blocks={body} />
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
    </>
  )
}

export default Posts
