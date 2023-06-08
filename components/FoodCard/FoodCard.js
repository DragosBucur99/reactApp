import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaBurn } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function FoodCard(props) {
  const curtain = useRef();
  const tl = useRef();

  const [click, setClick] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      yoyo: true,
      repeat: 1,
    });

    tl.current.to(curtain.current, {
      top: "0%",
      duration: 0.7,
      ease: "ease.out",
    });
  }, []);

  useEffect(() => {
    click ? tl.current.play() : tl.current.reverse();
  }, [click]);

  return (
    <div
      className="snap-start snap-always shrink-0 w-full rounded-lg h-full p-5 lg:shadow-md lg:h-full lg:flex-1"
      style={{ backgroundColor: props.color }}
    >
      <div className="overflow-hidden relative flex flex-col items-center bg-violet-700 rounded-xl h-full w-full">
        <div
          className="flex flex-col items-center justify-center w-full h-full absolute left-0 z-10"
          ref={curtain}
          style={{ top: "-200%" }}
        >
          <div className="w-full flex-1 bg-violet-700"></div>
          <img src="wave_1.svg" className="scale-150"></img>
        </div>
        <div
          className="patternFood w-full h-40"
          style={{ backgroundImage: "url('foodPattern_2.svg')" }}
        ></div>
        <div
          className="foodAvatar absolute bg-gray-200 h-40 w-40 rounded-full shadow-md"
          style={{ top: "5rem", backgroundImage: "url('foodrecipe.png')" }}
        />
        <AiOutlineHeart className="absolute top-5 right-5 scale-150" />
        <div
          className="flex flex-col bg-violet-50 h-full w-full rounded-xl pt-24 pb-5 flex-1 px-5 justify-between"
          style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}
        >
          {/* Card Header -> Title + Hours&Calories */}
          <div className="flex flex-col gap-5">
            <p className="text-center text-gray-800 text-2xl font-bold tracking-wide">
              Caprese Salad
            </p>
            <div className="flex text-gray-800 w-full justify-between items-center">
              <span className="text-sm font-semibold flex items-center gap-1">
                <AiOutlineClockCircle className="text-green-600" /> 15 min
              </span>
              <span className="text-sm font-semibold flex items-center gap-1">
                <FaBurn className="text-red-600" /> 256 calories
              </span>
            </div>
          </div>
          {/* Card Body -> Ingredients */}
          <div className="flex flex-col gap-2 text-gray-800 font-semibold text-lg">
            <span>Ingredients</span>
            <div className="flex w-full gap-2">
              <div className="shadow-md p-2 flex flex-col justify-between items-center self-stretch flex-1">
                <img src="tomato.svg" className="w-10"></img>
                <span className="font-semibold text-sm">Tomato</span>
              </div>
              <div className="shadow-md p-2 flex flex-col justify-between items-center self-stretch flex-1">
                <img src="basil.png" className="w-10"></img>
                <span className="font-semibold text-sm">Basil</span>
              </div>
              <div className="shadow-md p-2 flex flex-col justify-between items-center self-stretch flex-1">
                <img src="mozzarela.png" className="w-10"></img>
                <span className="font-semibold text-sm">Mozzarela</span>
              </div>
            </div>
          </div>
          {/* Card Footer -> CTA Buttons */}
          <div className="flex w-full text-gray-800 gap-2 flex-col items-center">
            <Link href={"/recipe"} className="w-full">
              <button className="text-white rounded-xl p-2 bg-violet-700 tracking-wide w-full hover:bg-violet-800">
                View recipe
              </button>
            </Link>
            <div
              className="group font-semibold text-gray-500 text-sm w-full flex justify-center items-center gap-1 cursor-pointer hover:text-gray-800"
              onClick={handleClick}
            >
              <span>...or SHUFFLE </span>
              <BsShuffle className="text-violet-500 font-bold group-hover:text-violet-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    setClick(!click);
  }
}

FoodCard.defaultProps = {
  color: "#1d1d1d",
};
