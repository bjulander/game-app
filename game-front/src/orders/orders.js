import React, {Component} from 'react'
import Order from './order.js'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Orders extends Component {
    render (){
        return (
            <>
                <ol type="1">
                    <h4>Upcoming Order:</h4>
                    {this.props.orders.map(order => <Order sandwich={order}/>)}
                </ol>
            </>
        )
    }
}

function mapStateToProps(state){
    let orderArray = state.ordersReducer.orders
    return {orders: orderArray}
}

export default connect(mapStateToProps)(Orders)