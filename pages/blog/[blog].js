import React from 'react'
import styles from '../../styles/Post.module.css'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import Menu from '../../components/menu'
import Footer from '../../components/footer'

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
      date,
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
  date,
}) => {
  return (
    <div className={styles.blogPost}>
      <Menu mode={2} />

      <div className={styles.titleContainer}>
        <h1>Journal</h1>
        <form className={styles.searchbar}>
          <input type="text" placeholder="Search...." />
          <input type="submit" value="GO" disabled />
        </form>
        <Link href="/blog">
          <a className={styles.backlink}>← BACK TO BLOG</a>
        </Link>
      </div>

      <p className={styles.category}>Journal &gt; {categories[0].title}</p>

      <h1 className={styles.postTitle}>{title}</h1>

      <p className={styles.author}>
        By {author} | {date}
      </p>

      <img className={styles.mainImage} src={mainImage.asset.url} />

      <BlockContent blocks={body} className={styles.postContent} />

      <Footer />
    </div>
  )
}

export default Posts
