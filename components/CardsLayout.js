
export default function CardsLayout(props) { 

    return (
        <div className="flex-1 relative snap-mandatory snap-y px-4 flex flex-col h-1/2 w-full mx-auto overflow-scroll overflow-y-scroll gap-10">
            <div className="snap-start snap-always shrink-0 w-full rounded-lg h-5/6 xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
            <div className="snap-start snap-always shrink-0 w-full rounded-lg h-5/6 xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
            <div className="snap-start snap-always shrink-0 w-full rounded-lg h-5/6 xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
        </div>
    )
}


CardsLayout.defaultProps = {
    color: '#1d1d1d'
}
