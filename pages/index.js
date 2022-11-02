import Head from 'next/head'
import CardsLayout from '../components/CardsLayout'
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
      <div>
        <CardsLayout />
      </div>
    </div>
  )
}
