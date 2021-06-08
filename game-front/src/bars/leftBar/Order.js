import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




class Order extends Component {
    render (){
        return (
            <>
                <span className="CurrentOrderStyle">
                    <h2>Current Order:</h2>
                    <h5>Bread</h5>{this.props.randOrder.bread}
                    <h5>Meat</h5>{this.props.randOrder.meat}
                    <h5>Cheese</h5>{this.props.randOrder.cheese}
                    <h5>Basics</h5>{this.props.randOrder.basics}
                    <h5>Condiments</h5>{this.props.randOrder.condiments}
                </span>
            </>
        )
    }
}

function mapStateToProps(state){
    let randOrder = state.orderReducer.order
    return {randOrder}
}

export default connect(mapStateToProps)(Order)

