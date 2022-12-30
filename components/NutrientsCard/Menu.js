import MenuCta from "./MenuCta";
import MenuItems from "./MenuItems";
import DeleteState from "./DeleteState";
import { useEffect, useRef, useState } from "react";

export default function Menu({
  setClick,
  setLoader,
  click,
  loader,
  deleteState,
  setDeleteState,
  foods,
  setFoods,
}) {
  const [itemsState, setItemsState] = useState(false);
  return (
    <div className="flex items-center gap-10 w-full h-full justify-center">
      <MenuCta
        itemsState={itemsState}
        setItemsState={setItemsState}
        deleteState={deleteState}
        setDeleteState={setDeleteState}
        foods={foods}
        setFoods={setFoods}
      />
      <MenuItems
        itemsState={itemsState}
        setClick={setClick}
        setLoader={setLoader}
        clikc={click}
        loader={loader}
        deleteState={deleteState}
        setDeleteState={setDeleteState}
      />
      <DeleteState
        deleteState={deleteState}
        foods={foods}
        setFoods={setFoods}
        setDeleteState={setDeleteState}
      />
    </div>
  );
}
