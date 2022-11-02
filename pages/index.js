import Head from 'next/head'
import CardsLayout from '../components/CardsLayout'
import Burger from '../components/Burger'

export default function Home() {

  return (
    <div className='h-full'>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative flex flex-col h-screen lg:w-full'>
        <Burger />
        <CardsLayout />
      </div>
    </div>
  )
}
