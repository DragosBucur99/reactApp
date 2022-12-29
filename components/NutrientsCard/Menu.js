import MenuCta from "./MenuCta";
import MenuItems from "./MenuItems";
import { useEffect, useRef, useState } from "react";

export default function Menu({ setClick, setLoader, click, loader }) {
  const [itemsState, setItemsState] = useState(false);
  return (
    <div className="flex items-center gap-10 w-full justify-center">
      <MenuCta itemsState={itemsState} setItemsState={setItemsState} />
      <MenuItems
        itemsState={itemsState}
        setClick={setClick}
        setLoader={setLoader}
        clikc={click}
        loader={loader}
      />
    </div>
  );
}
