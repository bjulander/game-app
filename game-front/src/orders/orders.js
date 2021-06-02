import React, {Component} from 'react'
import Order from './order.js'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import fetchOrders



class Orders extends Component {
    render (){
        return (
            <>
                <h4>Upcoming Order:</h4>
                <ol type="1">
                    {this.props.orders.map(order => <Order sandwich={order}/>)}
                </ol>
            </>
        )
    }
}

function mapStateToProps(state){
    return {orders: state.orders}
}

export default connect(mapStateToProps)(Orders)