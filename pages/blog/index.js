import React from 'react'
import styles from '../../styles/Blog.module.css'
import Link from 'next/link'
import Menu from '../../components/menu'
import Footer from '../../components/footer'

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
    <div className={styles.blog}>
      <Menu mode={2} />

      <div className={styles.titleContainer}>
        <h1>Journal</h1>
        <form className={styles.searchbar}>
          <input type="text" placeholder="Search...." />
          <input type="submit" value="GO" />
        </form>
      </div>
      <div className={styles.postsContainer}>
        {data.map((blog, key) => {
          return (
            <div className={styles.post} key={key}>
              <img src={blog.mainImage.asset.url} />
              <div className={styles.textContent}>
                <h3>{blog.title}</h3>

                <p className={styles.postdesc}>
                  {blog.body[0].children[0].text}
                </p>

                <Link href={'/blog/' + blog.slug.current}>
                  <a className={styles.posturl}> READ MORE</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
