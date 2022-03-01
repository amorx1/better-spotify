import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DashBoard from './DashBoard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Better Spotify</title>
        <meta name="Better Apple Music Client" content="Akshay Mor 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashBoard />
    </div>
  )
}

export default Home
