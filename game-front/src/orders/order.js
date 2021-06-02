
export default function Order(props) {
    return (
        <>
            <li key={props.sandwich.id}>{props.sandwich.name}</li>
        </>
    )
}
