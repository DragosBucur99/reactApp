export default function MenuCta({ setItemsState, itemsState }) {
  const handleItemsState = () => {
    setItemsState(!itemsState);
  };
  return (
    <div className="p-2 cursor-pointer bg-indigo-700 rounded-full flex items-center justify-center shadow-md">
      <div
        className="flex justify-center items-center min-w-[2rem] min-h-[2rem]"
        onClick={handleItemsState}
      >
        <div className="relative w-full h-1">
          <div className="absolute inset-0 bg-red-100 z-10 origin-center rotate-45 flex items-center justify-center rounded-md">
            <div
              className="h-[140%] z-20 bg-indigo-700"
              style={{
                width: itemsState ? "0%" : "70%",
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-white origin-center rotate-[-45deg] flex items-center justify-center rounded-md">
            <div
              className="h-[140%] z-20 bg-indigo-700"
              style={{
                width: itemsState ? "0%" : "70%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
