import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Order extends Component {
    render (){
        return (
            <>
                <ol type="1">
                    <h4>Current Order:</h4>
                    {<li key={this.props.order.id}>{this.props.order.name}</li>}
                </ol>
            </>
        )
    }
}

function mapStateToProps(state){
    debugger
    let randOrder = state.orderReducer.order
    return {order: randOrder}
}

export default connect(mapStateToProps)(Order)

