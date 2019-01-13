import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotgoing } from '../actions/notgoing'


class Notgoing extends Component {
    componentDidMount(){
        getNotgoing()
    }
  render() {
    return (
        <div><h3>Not Going</h3></div>
    )
  }
}

function mapStateToProps(appState) {
    return {
      notgoing: appState.contactsReducer.notgoing
    }
  }

  export default connect(mapStateToProps)(Notgoing)
