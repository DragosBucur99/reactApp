
import dayjs from "dayjs";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { useState } from "react";

export default function Calendar ({sendDay, sendMonth}) {

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // console.log(dayjs('2022-02-01').daysInMonth())
    // console.log(dayjs('2022-05-01').startOf("month").day())
    const [days, setDays] = useState(Array.from({length: dayjs().daysInMonth()}, (_, i) => i + 1))
    const [startDay, setStartDay] = useState(Array.from({length: dayjs().startOf("month").day()}, (_, i) => i + 1))
    const [month, setMonth] = useState(months[dayjs().month()])
    const [state, setState] = useState(-1)

    const handlePrevClick = () => {
        setMonth(months[months.indexOf(month) - 1])
        setDays(Array.from({length: dayjs(`${dayjs().year()}-${(months.indexOf(month) + 1) - 1}-01`).daysInMonth()}, (_, i) => i + 1))
        setStartDay(Array.from({length: dayjs(`${dayjs().year()}-${(months.indexOf(month) + 1) - 1}-01`).startOf("month").day()}, (_, i) => i + 1))
    }

    const handleForwardClick = () => {
        setMonth(months[months.indexOf(month) + 1])
        setDays(Array.from({length: dayjs(`${dayjs().year()}-${(months.indexOf(month) + 1) + 1}-01`).daysInMonth()}, (_, i) => i + 1))
        setStartDay(Array.from({length: dayjs(`${dayjs().year()}-${(months.indexOf(month) + 1) + 1}-01`).startOf("month").day()}, (_, i) => i + 1))
    }

    return (
            <div className="flex-col bg-indigo-700 h-full w-full">
                <header className="flex justify-between p-5">
                    <span className="tracking-wide font-semibold">{month}</span>
                    <div className="flex items-center gap-4">
                        <AiOutlineLeft onClick={handlePrevClick} className={"cursor-pointer " + (months.indexOf(month) === 0 ? 'pointer-events-none opacity-50' : '')} />
                        <span className="tracking-wide select-none">{dayjs().year()}</span>
                        <AiOutlineRight onClick={handleForwardClick} className={"cursor-pointer " + (months.indexOf(month) === 11 ? 'pointer-events-none opacity-50' : '')} />
                    </div>
                </header>
                <div className="flex px-5">
                    {weekDays.map(weekDay => <span className="dynamicWidth text-center opacity-40">{weekDay}</span>)}
                </div>
                <div className="flex flex-wrap p-5">
                    {startDay.map(day => <span className="dynamicWidth"></span>)}
                    {days.map((day, index) => <span className="dynamicWidth text-center py-2 cursor-pointer rounded-md select-none" onClick={() => {setState(index); sendDay(days[index]); sendMonth(month) }} style={{backgroundColor: state === index ? 'rgb(55 48 163)': ''}}>{day}</span>)}
                </div>
            </div>
    )
}


Calendar.defaultProps = {
    display: 'flex'
}