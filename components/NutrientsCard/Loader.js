import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useState, useRef, useEffect } from "react";

export default function Loader({ loader }) {
  return (
    <div
      className="flex w-full h-full items-center justify-center text-2xl gap-4"
      style={{ display: loader ? "flex" : "none" }}
    >
      <div className="spinner">
        <AiOutlineLoading3Quarters />
      </div>
      <span>Loading...</span>
    </div>
  );
}
