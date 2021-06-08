import React, {Component, Fragment} from 'react'
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Ingredient from './Ingredient.js'


class Ingredients extends Component {

    render (){
        return (
            <>
                <ul>
                    <h1>Build Order:</h1>
                    {this.props.ingredients && this.props.ingredients.map((ing, i) => <span key={ing.id}><Ingredient indIng={ing}/></span> )}
                </ul>

            </>
        )
    }
}

function mapStateToProps(state){
    let ings = state.ingredientsReducer.ingredients
    return {ingredients: ings}
}

export default connect(mapStateToProps)(Ingredients)
