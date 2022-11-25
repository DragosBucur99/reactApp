import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import Datepicker from "react-tailwindcss-datepicker";

export default function TodoCard(props) {

    const [click, setClick] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [toDos, setToDos] = useState([])
    const expendUp = useRef()
    const createTodo = useRef()
    const emptyTodoList = useRef()
    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    const tl = useRef()

    useEffect(() => {    
    
        tl.current = gsap.timeline({
            paused: true
        })
        
        tl.current.to(emptyTodoList.current, {opacity: 0, display: 'none'})
        tl.current.to(expendUp.current, {top: "0%", duration: 0.2, ease: "ease.out"},'-=0.2' )
        tl.current.to(createTodo.current, {display: 'flex'})
      }, []);
    
    useEffect(() => {    
        click ? tl.current.play() : tl.current.reverse()
      }, [click]);


    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        // console.log('form submitted ✅');
        // console.log("Title: ", title)
        // console.log("Description: ", description)
        titleInputRef.current.value = ''
        descriptionInputRef.current.value = ''
        setToDos(prev => {
            return[...prev, title]
        })
        // emptyTodoList.current.style.opacity = '100%'
        // createTodo.current.style.display = 'none'
        // emptyTodoList.current.style.display = 'flex'
        setClick(!click)
        setTitle('')
        setDescription('')
      };

    return (
        <div className="relative snap-start snap-always shrink-0 w-full rounded-lg h-full p-5 lg:shadow-md lg:h-full lg:flex-1" style={{backgroundColor: props.color}}>
            <div className="flex flex-col rounded-xl bg-indigo-500" style={{height: '100%'}}>
                {/* Header */}
                <div className="flex flex-col gap-3 p-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-md font-semibold tracking-wide">Good morning!</h1>
                        <p className="font-bold text-lg text-red-400">It looks like your to-do list is empty!</p>
                    </div>
                    <p className="uppercase font-semibold text-indigo-100 opacity-70">Today tasks to do: 0</p>
                </div>
                {/* Main body */}
                <div className="relative flex-1 bg-indigo-700 flex flex-col" style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}>
                    <button className="h-16 font-bold tracking-wider" onClick={handleClick}>CREATE TASK </button>
                    <div className="flex-1 flex justify-center absolute bg-indigo-600 top-16 left-0 bottom-0 w-full shadow py-5" style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }} ref={expendUp}>
                        <div ref={emptyTodoList} className="w-full h-full flex flex-col justify-center items-center gap-5 px-5">
                            <h1 className={toDos.length > 0 ? "hidden" : ""}>Empty...</h1>
                            {toDos.map(toDo => (
                                <div className="flex w-full p-3 shadow-md rounded-md">{toDo}</div>
                            ))}
                        </div>
                        <div className="hidescrollbar w-full overflow-y-auto px-5 flex-col gap-5 hidden flex flex-col justify-between" ref={createTodo}>
                            <div className="flex flex-col gap-1">
                                <label className="tracking-wide">Pick a date <span className="opacity-50 text-sm">(optional)</span></label>
                                <Datepicker value={value} onChange={handleValueChange} primaryColor={"indigo"} asSingle={true} useRange={false} placeholder={"Due date"} />
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-1">
                                        <label for="title" className="tracking-wide">Title</label>
                                        <input type="text" id="title" onChange={e => setTitle(e.target.value)} required ref={titleInputRef}></input>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label for="description" className="tracking-wide">Description</label>
                                        <textarea type="text" id="description" rows="3" onChange={e => setDescription(e.target.value)} required ref={descriptionInputRef}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className='text-white font-semibold rounded-xl p-2 bg-indigo-700 tracking-wide hover:bg-indigo-800'>Create to-do</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function handleClick() {
        setClick(!click)
    }
}

TodoCard.defaultProps = {
    color: '#1d1d1d'
}
