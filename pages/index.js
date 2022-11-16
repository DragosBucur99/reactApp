import Head from 'next/head'
import CardsLayout from '../components/CardsLayout'
import Burger from '../components/Burger'
import {motion} from "framer-motion"


export default function Home() {

  return (
    <motion.div className='h-full' exit={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative flex flex-col h-screen lg:w-full'>
        <Burger />
        <CardsLayout />
      </div>
    </motion.div>
  )
}
