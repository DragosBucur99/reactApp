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
}) {
  const handleClick = () => {
    setClick(!click);
    setLoader(!loader);
  };

  return (
    <div
      className="gap-8"
      style={{ display: itemsState && !deleteState ? "flex" : "none" }}
    >
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        onClick={handleClick}
      >
        <IoCreateOutline className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Create</span>
      </div>
      <div className="text-center flex justify-center items-center flex-col gap-1">
        <FiEdit2 className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Edit</span>
      </div>
      <div
        className="text-center flex justify-center items-center flex-col gap-1"
        onClick={() => setDeleteState(!deleteState)}
        style={{ border: deleteState ? "1px solid red" : "none" }}
      >
        <MdDeleteOutline className="text-white text-xl" />
        <span className="text-sm font-semibold tracking-wide">Delete</span>
      </div>
    </div>
  );
}
