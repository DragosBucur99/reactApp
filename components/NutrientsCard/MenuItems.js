import { IoCreateOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function MenuItems({
  setClick,
  setLoader,
  click,
  loader,
  itemsState,
  deleteState,
  setDeleteState,
  editState,
  setEditState,
}) {
  const handleClick = () => {
    setClick(!click);
    setLoader(!loader);
  };

  const handleEditClick = () => {
    setEditState(!editState);
  };

  return (
    <div
      className="gap-7"
      style={{
        display: itemsState && !deleteState ? "flex" : "none",
      }}
    >
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        onClick={handleClick}
      >
        <IoCreateOutline className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Create</span>
      </div>
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        onClick={handleEditClick}
        style={{ border: editState ? "1px solid red" : "none" }}
      >
        <FiEdit2 className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Edit</span>
      </div>
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        onClick={() => setDeleteState(!deleteState)}
      >
        <MdDeleteOutline className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Delete</span>
      </div>
    </div>
  );
}
