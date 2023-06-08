import { AiOutlineClose } from "react-icons/ai";

export default function ResetCalendar({ currentDay, setCurrentDay }) {
  return (
    <div
      onClick={() => setCurrentDay("")}
      className="items-center px-2 cursor-pointer extendBorder"
      style={{ display: currentDay ? "flex" : "none" }}
    >
      <AiOutlineClose />
    </div>
  );
}
