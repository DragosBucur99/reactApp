export default function Card(props) { 

    return (
        <div className="relative h-screen w-full py-20 px-3 xl:h-full xl:px-5">
            <div className="h-full w-full rounded-lg xl:shadow-md xl:h-full" style={{backgroundColor: props.color}} />
        </div>
    )
}


Card.defaultProps = {
    color: '#1d1d1d'
}
