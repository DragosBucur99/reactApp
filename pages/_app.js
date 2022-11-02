import '../styles/globals.css'
import { useEffect } from "react"


function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
  )
}




export default MyApp
