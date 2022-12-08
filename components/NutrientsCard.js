export default function NutrientsCard(props) {
  return (
    <div className="flex flex-col gap-5 snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1">
      <div
        className="w-full h-[30%] bg-red-400 rounded-lg"
        style={{ backgroundColor: props.color }}
      ></div>
      <div
        className="w-full flex-1 bg-red-400 rounded-lg"
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  );
}

NutrientsCard.defaultProps = {
  color: "#1d1d1d",
};
