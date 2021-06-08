import '../style/ChoicesStyle.css'

export default function Choice(props) {
    return (
        <>
            {/* <div className="ChoicesStyle"> */}
                {props.item && props.item.name}
            {/* </div> */}
        </>
    )
}