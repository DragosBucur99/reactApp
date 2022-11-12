export default function TodoCard(props) {
    return (
        <div className="snap-start snap-always shrink-0 w-full rounded-lg h-full lg:shadow-md lg:h-full lg:flex-1" style={{backgroundColor: props.color}} />
    )
}

TodoCard.defaultProps = {
    color: '#1d1d1d'
}