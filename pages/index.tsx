import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/header'
import Main from '../src/components/main'
import About from '../src/components/about'
import CommonApp from '../src/components/commonApp'
import Footer from '../src/components/footer'
import Form from '../src/components/form'
import EggsCards from '../src/components/eggsCards'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DIGITAL PASSPORT</title>
        <meta name="description" content="DIGITAL PASSPORT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main/>
      <About/>
      <CommonApp/>
      <EggsCards/>
      <Form/>

      <Footer/>
    </>
  )
}

export default Home
