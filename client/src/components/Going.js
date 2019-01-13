import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoing } from '../actions/going'



class Going extends Component {
    componentDidMount() {
        getGoing()
    }


  render() {
    return (
        <div><h2>Goings</h2></div>
    )
  }
}

function mapStateToProps(appState) {
    return {
      going: appState.contactsReducer.going
    }
  }

  export default connect(mapStateToProps)(Going)