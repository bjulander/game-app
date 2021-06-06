import React, {Component} from 'react'
// import Order from './order.js'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchIngredients from '../actions/fetchIngredients'

class Ingredients extends Component {

    componentDidMount(){
        this.props.fetchIngredients()
    }

    render (){
        return (
            <>
                <ol type="1">
                    <h4>Build Order:</h4>
                    {this.props.ingredients.name}
                </ol>
            </>
        )
    }
}

function mapStateToProps(state){
    let ingArray = state.ingredientsReducer.ingredients
    return {ingredients: ingArray}
}

export default connect(mapStateToProps,{fetchIngredients})(Ingredients)
