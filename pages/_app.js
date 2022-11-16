import '../styles/globals.css'
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
    //gets screen size - to fix mobile viewport height problem
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          let vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
  
        // Add event listener
        window.addEventListener("resize", handleResize);
  
        // Call handler right away so state gets updated with initial window size
        handleResize();
  
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);

  return (
    <>
    <AnimatePresence initial={false} mode={'wait'}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
    </>
  )
}




export default MyApp
