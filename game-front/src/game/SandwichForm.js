import React, {Component} from 'react'
import {connect} from 'react-redux'


class SandwichForm extends Component {

    render(){
        return (
            <>
              <ol>
                    <h4>Sandwich</h4>
                   
                </ol>
            </>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(SandwichForm)