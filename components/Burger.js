import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import ExpandedMenu from "./ExpandedMenu"

export default function Burger() {

const upperLine = useRef(), middleLine = useRef(), lowerLine = useRef(), toggleDisplay = useRef()
const tl = useRef()

const [click, setClick] = useState(false)

useEffect(() => {    
    
    tl.current = gsap.timeline({
        paused: true
    })

    tl.current.to(middleLine.current, {opacity: 0, x: "-2rem", display: "none", duration: 0.2})
    tl.current.to(upperLine.current, {rotate: 45, duration: 0.2})
    tl.current.to(lowerLine.current, {rotate: -45, duration: 0.2}, '<')
    tl.current.set(toggleDisplay.current, {display: 'block'}, '<')
    tl.current.set(upperLine.current, {position: 'absolute', top: '50%', left: '50%', xPercent: -50, yPercent: -50, }, '<')
    tl.current.set(lowerLine.current, {position: 'absolute', top: '50%', left: '50%', xPercent: -50, yPercent: -50, }, '<')
  }, []);

useEffect(() => {    
    click ? tl.current.play() : tl.current.reverse()
  }, [click]);

    return (
        <div className="w-full xl:hidden">
             <ExpandedMenu toggle={click} />
            <div className='fixed w-8 h-8 top-4 right-5 z-10 cursor-pointer flex justify-center items-center' onClick={handleClick}>
                <div className="relative w-full h-full flex flex-col justify-center items-center gap-2" ref={toggleDisplay}>
                    <div className="w-full h-0.5 bg-stone-100 z-20 origin-center" ref={upperLine}></div>
                    <div className="w-full h-0.5 bg-stone-100 z-20 origin-center" ref={middleLine}></div>
                    <div className="w-full h-0.5 bg-stone-100 z-20 origin-center" ref={lowerLine}></div>
                </div>
            </div>
        </div>
        
    )

    function handleClick() {
        setClick(!click)
    }
}
