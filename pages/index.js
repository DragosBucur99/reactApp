import Head from 'next/head'
import Card from '../components/Card'
import Dots from '../components/Dots'
import Burger from '../components/Burger'
import { useInView } from 'react-intersection-observer'

export default function Home() {

const [ref1, inView1] = useInView({
  /* Optional options */
  rootMargin: '0px 0px',
  unobserveOnEnter: true
})

const [ref2, inView2] = useInView({
  /* Optional options */
  rootMargin: '0px 0px',
  unobserveOnEnter: true
})

const [ref3, inView3] = useInView({
  /* Optional options */
  rootMargin: '0px 0px',
  unobserveOnEnter: true
})

  return (
    <div>
      <Head>
        <title>Create Next App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Burger />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
