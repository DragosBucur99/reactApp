export default function Dots({bgColor1, bgColor2, bgColor3}) {
    return (
        <div className="flex absolute bottom-9 w-full justify-center gap-x-4 xl:hidden ">
            <div className={`${bgColor1} border-slate-200 border-2 rounded-full h-2 w-2`} />
            <div className={`${bgColor2} border-slate-200 border-2 rounded-full h-2 w-2`} />
            <div className={`${bgColor3} border-slate-200 border-2 rounded-full h-2 w-2`} />
        </div>
    )
}