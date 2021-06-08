import '../style/ChoicesStyle.css'

export default function Choice(props) {
    return (
        <>
            <span className="ChoicesStyle">
                <ul>
                    {props.item && props.item.name}
                </ul>
            </span>
        </>
    )
}