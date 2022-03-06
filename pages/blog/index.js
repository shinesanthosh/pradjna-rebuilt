import React from 'react'
import styles from '../../styles/Blog.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[_type == 'post']{title,mainImage{asset->{url}},body,slug{current}}`
  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  return {
    props: { data: data.result },
  }
}

const Blog = ({ data }) => {
  return (
    <>
      <div className={styles.top}>
        <img className={styles.logo} src='Group 243.png' />
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
            <button className={styles.reg}>
              <Link href='/register'>REGISTER</Link>
            </button>
          </li>
          <li>
            <Link href='/login'>LOG IN</Link>
          </li>
        </ul>

        <br />
        <br />

        <div className={styles.topsearch}>
          <h1 className={styles.gg}>Journal</h1>
          <form className={styles.searchbar}>
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
          </form>{' '}
        </div>
      </div>
      <br></br>

      {data.map((blog, key) => {
        return (
          <div className={styles.cards1} key={key}>
            <div className={styles.image}>
              <img src={blog.mainImage.asset.url} />
            </div>
            <br />
            <h3>{blog.title}</h3>
            <br />
            <p className={styles.p}>{blog.body[0].children[0].text}</p>
            <br />
            <button>
              <Link href={'/blog/' + blog.slug.current}>READ MORE</Link>
            </button>
          </div>
        )
      })}

      <div className={styles.bot}>
        <ul className={`${styles.ul} ${styles.botul}`} >
          <br />
          <li>
            <strong>Information</strong>
          </li>
          <br />
          <br />
          <li>
            <a href='#'>Home</a>
          </li>
          <br />
          <li>
            <a href='#'>Services</a>
          </li>
          <br />
          <li>
            <a href='#'>Solution</a>
          </li>
          <br />
          <li>
            <a href='#'>FAQ</a>
          </li>
          <br />
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
        </ul>
        <ul className={`${styles.ul} ${styles.Com}`} >
          <br />
          <li>
            <strong>Company</strong>
          </li>
          <br />
          <br />
          <li>
            <a href='#'> About Us</a>
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
        <p className={`${styles.p} ${styles.pp}`} >
          Pradjna is a cutting edge B2B HR performance
          <br /> management platform focused on re-
          <br />
          engineering legacy business processes using <br />
          Machine Learning.
        </p>
        <br />
        <a href='#'>
          <img src='Ellipse 26.png' />
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
        <p className={styles.p}>Learn about growing your business.</p>
        <br />
        <div className={styles.subii}>
          <input className={styles.subi} type='search' id='quary' />
          <button className={styles.aaa} value='submit'>
            SUBSCRIBE
          </button>
        </div>
      </div>
      <br />
      <p className={`${styles.p} ${styles.copyi}`} >
        {' '}
        Copyright © Pradjna Intellisys
      </p>
    </>
  )
}

export default Blog
