import { IoCreateOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function MenuItems({
  setClick,
  setLoader,
  click,
  loader,
  itemsState,
}) {
  const tl = useRef();
  const tlReverse = useRef();
  const crt = useRef();
  const edt = useRef();
  const del = useRef();
  const container = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(
      container.current,
      {
        display: "flex",
      },
      "-=0.5"
    );

    tl.current.to(crt.current, {
      opacity: "100%",
      ease: "power1.out",
      duration: 0.1,
    });

    tl.current.to(edt.current, {
      opacity: "100%",
      ease: "power1.out",
      duration: 0.1,
    });

    tl.current.to(del.current, {
      opacity: "100%",
      ease: "power1.out",
      duration: 0.1,
    });
  });

  useEffect(() => {
    tlReverse.current = gsap.timeline({
      paused: true,
    });

    tlReverse.current.to(del.current, {
      opacity: "0%",
      ease: "power1.out",
      duration: 0.1,
    });

    tlReverse.current.to(edt.current, {
      opacity: "0%",
      ease: "power1.out",
      duration: 0.1,
    });

    tlReverse.current.to(crt.current, {
      opacity: "0%",
      ease: "power1.out",
      duration: 0.1,
    });

    tlReverse.current.to(
      container.current,
      {
        display: "none",
      },
      "-=0.5"
    );
  });

  useEffect(() => {
    itemsState ? tl.current.play() : tlReverse.current.play();
  }, [itemsState]);

  const handleClick = () => {
    setClick(!click);
    setLoader(!loader);
  };

  return (
    <div
      className="gap-8"
      //   style={{ display: itemsState ? "flex" : "none" }}
      style={{ display: "none" }}
      ref={container}
    >
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        style={{ opacity: "0%" }}
        onClick={handleClick}
        ref={crt}
      >
        <IoCreateOutline className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Create</span>
      </div>
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        style={{ opacity: "0%" }}
        ref={edt}
      >
        <FiEdit2 className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Edit</span>
      </div>
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        style={{ opacity: "0%" }}
        ref={del}
      >
        <MdDeleteOutline className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Delete</span>
      </div>
    </div>
  );
}
