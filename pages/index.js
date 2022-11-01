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
      <div className="h-screen w-full bg-red-400 overflow-scroll snap snap-y snap-mandatory overflow-x-hidden xl:overflow-auto xl:snap-none xl:flex xl:w-screen xl:h-screen xl:justify-center xl:items-center xl:px-10">
        <Burger />
        <div className='my-4 xl:h-full xl:flex-1 xl:my-0' ref={ref1}>
          <Card />
        </div>
        <div className='my-4 xl:h-full xl:flex-1 xl:my-0' ref={ref2}>
          <Card />
        </div>
        <div className='my-4 xl:h-full xl:flex-1 xl:my-0' ref={ref3}>
          <Card />
        </div>
        <Dots bgColor1={inView1 ? 'bg-white': ''} bgColor2={inView2 ? 'bg-white': ''} bgColor3={inView3 ? 'bg-white': ''} />
      </div>
    </div>
  )
}
