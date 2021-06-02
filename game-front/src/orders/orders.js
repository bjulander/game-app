import React, {Component} from 'react'
import Order from './orders/Order'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Orders extends Component {
    render (){
        return (
            <>
                <ul>
                    <Order />
                </ul>
            </>
        )
    }
}

export default connect()(Orders)