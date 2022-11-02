export default function CardsLayout(props) { 

    return (
        <div className="snap-mandatory snap-y gap-20 px-5 py-20 flex flex-col h-screen w-full mx-auto overflow-scroll"> 
            <div className="snap-center snap-always shrink-0 w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color, height: '90%'}} />
            <div className="snap-center snap-always shrink-0 w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color, height: '90%'}} />
            <div className="snap-center snap-always shrink-0 w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color, height: '90%'}} />
        </div>
    )
}


CardsLayout.defaultProps = {
    color: '#1d1d1d'
}
