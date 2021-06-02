
export default function Order(props) {
    return (
        <>
            <li key={props.indOrder.id}>{props.indOrder.name}</li>
        </>
    )
}
