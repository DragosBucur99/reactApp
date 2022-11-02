import Head from 'next/head'
import Card from '../components/Card'
import Dots from '../components/Dots'
import Burger from '../components/Burger'
import { useState, useRef, useEffect } from "react"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Burger />
      <div className='snap-mandatory snap-y flex flex-col h-screen w-full mx-auto overflow-scroll'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
