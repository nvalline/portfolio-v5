import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        {/* Page Title */}
        <title>Nate Valline | Web Developer</title>
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Nate Valline Portfolio v. 5
        </h1>
      </div>
    </Layout>
  )
}
