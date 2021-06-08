import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../style/BarsStyle.css'
import '../../style/SandwichFormStyle.css'


class SandwichForm extends Component {

    render(){
        return (
            <>
                <form className="SandwichFormStyle">
                    <h2>Sandwich:</h2>
                    <h5>Bread</h5>
                    <h5>Meat</h5>
                    <h5>Cheese</h5>
                    <h5>Basics</h5>
                    <h5>Condiments</h5>
                </form>
            </>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(SandwichForm)