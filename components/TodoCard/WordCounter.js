export default function WordCounter({ wordCounter }) {
  return (
    <div
      className="items-center px-2 extendBorder"
      style={{ display: wordCounter > 0 ? "flex" : "none" }}
    >
      <span
        className="text-sm tracking-wider font-semibold opacity-60"
        style={{ color: wordCounter === 30 ? "red" : "white" }}
      >
        {wordCounter}/30
      </span>
    </div>
  );
}
