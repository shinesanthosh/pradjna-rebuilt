import React from 'react'
import styles from '../../styles/Product.module.css'

import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import Menu from '../../components/menu'
import Footer from '../../components/footer'

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
  const query = `*[_type == 'product' && id.current == '${params.product}']{title,image{asset->{url}},features,description,body[]{_type,children,style,asset->{url}},useCases[]->{title,slug{current}}}`

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
    <div className={styles.product}>
      <Menu mode={2} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.titleDesc}>{description}</p>
      <img className={styles.mainImage} src={image.asset.url} />

      <div className={styles.features}>
        <h2> Features </h2>
        <ul className={styles.featureList}>
          {features.map((feature, key) => (
            <li key={key}>
              <img src="/list.png" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.content}>
        <BlockContent blocks={body} />
      </p>

      <div className={styles.useCases}>
        <h3>Usecases</h3>

        <div className={styles.useCasesList}>
          {useCases.map((useCase, key) => (
            <div className={styles.useCase} key={key}>
              <span>{useCase.title}</span>

              <Link
                className={styles.learn}
                href={`/products/usecases/${useCase.slug.current}`}
              >
                LEARN MORE &gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
