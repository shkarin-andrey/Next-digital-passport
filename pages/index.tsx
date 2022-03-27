import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/header'
import Main from '../src/components/main'
import About from '../src/components/about'
import CommonApp from '../src/components/commonApp'
import Footer from '../src/components/footer'
import Form from '../src/components/form'
import EggsCards from '../src/components/eggsCards'
import { useRef } from 'react'

const Home: NextPage = () => {
  const about = useRef(null)
  return (
    <>
      <Head>
        <title>DIGITAL PASSPORT</title>
        <meta name="description" content="DIGITAL PASSPORT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main aboutRef={about}/>
      <About aboutRef={about}/>
      <CommonApp/>
      <EggsCards/>
      <Form/>

      <Footer/>
    </>
  )
}

export default Home
