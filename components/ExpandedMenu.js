import { useRef, useEffect } from "react"
import { gsap } from "gsap"


export default function ExpandedMenu(props) {

    const toggle = props.toggle
    const style = ""
    const tl = useRef(), ref = useRef(), contactRef = useRef(), dashbordRef = useRef(), logoutRef = useRef()

    useEffect(() => {    
    
        tl.current = gsap.timeline({
            paused: true
        })
    
        tl.current.to(ref.current, {bottom: '0%', duration: 0.2})
        tl.current.to(dashbordRef.current, {top: '0%', ease: "back.out(1.7)", duration: 0.3})
        tl.current.to(contactRef.current, {top: '0%', ease: "back.out(1.7)", duration: 0.3}, '-=0.2')
        tl.current.to(logoutRef.current, {top: '0%', ease: "back.out(1.7)", duration: 0.3}, '-=0.2')
      }, []);
    
    useEffect(() => {    
        toggle ? tl.current.play() : tl.current.reverse()
      }, [toggle]);

    return (
            <div className='absolute bg-red-400 backdrop-blur-sm w-full h-screen z-10 bottom-full flex flex-col justify-center text-6xl gap-10 px-4' ref={ref}>
                <div className="relative w-full h-20 overflow-hidden"><span className="absolute left-0 top-20" ref={dashbordRef}>Dashbord</span></div>
                <div className="relative w-full h-20 overflow-hidden"><span className="absolute left-0 top-20" ref={contactRef}>Contact</span></div>
                <div className="relative w-full h-20 overflow-hidden"><span className="absolute left-0 top-20" ref={logoutRef}>Log out</span></div>
        </div>
    )
}
