import React, { Component } from "react";
import { connect } from "react-redux";
// import startTimer from '../../actions/startTimer'
// import stopTimer from '../../actions/stopTimer'

class Timer extends Component {

  render() {
   return(
        <section className="Timer">
            <h1>{this.props.timer} seconds remaining</h1>
        </section>
    )
  }
}

function mapStateToProps(state){
    return {timer: state.timerReducer.timer}
}

export default connect(mapStateToProps)(Timer)