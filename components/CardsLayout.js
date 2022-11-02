
export default function CardsLayout(props) { 

    return (
        <div className="flex-1 relative snap-mandatory snap-y px-4 pb-4 flex flex-col h-1/2 w-full mx-auto overflow-scroll overflow-y-scroll gap-10 lg:flex-row lg:overflow-hidden lg:py-20 lg:px-20 md:px-20">
            <div className="flex flex-col gap-5 snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1">
                <div className="w-full h-[30%] bg-red-400 rounded-lg" style={{backgroundColor: props.color}}></div>
                <div className="w-full flex-1 bg-red-400 rounded-lg" style={{backgroundColor: props.color}}></div>
            </div>
            <div className="snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1" style={{backgroundColor: props.color}} />
            <div className="snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1" style={{backgroundColor: props.color}} />
        </div>
    )
}


CardsLayout.defaultProps = {
    color: '#1d1d1d'
}
