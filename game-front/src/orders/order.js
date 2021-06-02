import {connect} from 'react-redux'


export function Order(props) {

    return (
        <>
            <h1>Order Comp</h1>
            {props.orders.map(order => <li key={order.id}>{order.name}</li>)}
        </>
    )
}

function mapStateToProps(state){
    return {orders: state.orders}
}

export default connect(mapStateToProps)(Order)


//Display sandwich name in the left side bar for upcoming order