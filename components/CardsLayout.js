export default function CardsLayout(props) { 

    return (
        <div className="snap-mandatory snap-y gap-20 px-3 py-20 flex flex-col h-screen w-full mx-auto overflow-scroll"> 
            <div className="snap-center snap-always shrink-0 h-full w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
            <div className="snap-center snap-always shrink-0 h-full w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
            <div className="snap-center snap-always shrink-0 h-full w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
        </div>
    )
}


CardsLayout.defaultProps = {
    color: '#1d1d1d'
}
