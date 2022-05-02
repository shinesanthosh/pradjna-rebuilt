import React from 'react'
import styles from '../../../styles/UseCase.module.css'

import Link from 'next/link'
import Menu from '../../../components/menu'
import Footer from '../../../components/footer'
import BlockContent from '@sanity/block-content-to-react'

export const getStaticPaths = async () => {
  const url = process.env.CMSURL
  const query = `*[_type == 'product']{id{current},title,useCases[]->{slug{current}}}`

  const res = await fetch(url + '?query=' + encodeURIComponent(query))
  const data = await res.json()

  let paths = []

  for (let i in data.result) {
    data.result[i].useCases.map((useCase, key) => {
      paths.push({
        params: {
          product: data.result[i].id.current,
          case: useCase.slug.current,
        },
      })
    })
  }

  paths.push({ params: { product: 'dishku', case: 'dinku' } })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const url = process.env.CMSURL

  let query = `*[_type == 'product' && id.current == '${params.product}']{title,id{current}}`
  let res = await fetch(url + '?query=' + encodeURIComponent(query))
  let data = await res.json()
  let productTitle = data.result[0].title
  let productId = data.result[0].id.current

  query = `*[_type == 'useCase' && slug.current == '${params.case}']{body,mainImage{asset->{url}},slug,title}`

  res = await fetch(url + '?query=' + encodeURIComponent(query))
  data = await res.json()

  return {
    props: {
      title: data.result[0].title,
      mainImage: data.result[0].mainImage,
      body: data.result[0].body,
      productTitle,
      productId,
    },
  }
}

const useCase = ({ productTitle, productId, title, mainImage, body }) => {
  return (
    <div className={styles.useCase}>
      <Menu mode={2} />

      <div className={styles.product}>
        <h2>{productTitle}</h2>
        <div className={styles.btngrp}>
          <Link href="#">
            <a className={styles.demoBtn}>See a Demo</a>
          </Link>

          <Link href={'/products/' + productId}>
            <a className={styles.learnBtn}>Learn More</a>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.routeMap}>
          <Link href={'/products/' + productId}>{productTitle}</Link> &nbsp;
          &gt; &nbsp;{title}
        </span>

        <h1>{title}</h1>

        <BlockContent blocks={body} />
      </div>
      <Footer />
    </div>
  )
}

export default useCase
