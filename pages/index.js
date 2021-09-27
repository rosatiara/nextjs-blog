import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! Great to see you.</p>
        <p>
          Had a great time learning how to make a beautiful site with this {' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>
        </p>
        <p>
          Kindly visit my first post {''}
          <Link href="/posts/first-post">
          <a>here</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}