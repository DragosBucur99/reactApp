import MenuCta from "./MenuCta";
import MenuItems from "./MenuItems";
import DeleteState from "./DeleteState";
import EditState from "./EditState";
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
  editState,
  setEditState,
  value,
}) {
  const [itemsState, setItemsState] = useState(false);
  return (
    <div
      className="flex items-center w-full h-full px-10 gap-6"
      style={{ justifyContent: itemsState ? "space-between" : "center" }}
    >
      <MenuCta
        itemsState={itemsState}
        setItemsState={setItemsState}
        deleteState={deleteState}
        setDeleteState={setDeleteState}
        editState={editState}
        setEditState={setEditState}
        foods={foods}
        setFoods={setFoods}
      />
      <div style={{ display: editState ? "none" : "" }}>
        <MenuItems
          itemsState={itemsState}
          setClick={setClick}
          setLoader={setLoader}
          click={click}
          loader={loader}
          deleteState={deleteState}
          setDeleteState={setDeleteState}
          editState={editState}
          setEditState={setEditState}
          foods={foods}
          setFoods={setFoods}
        />
      </div>
      <DeleteState
        deleteState={deleteState}
        foods={foods}
        setFoods={setFoods}
        setDeleteState={setDeleteState}
      />

      <EditState
        editState={editState}
        setEditState={setEditState}
        setFoods={setFoods}
        foods={foods}
        value={value}
      />
    </div>
  );
}
