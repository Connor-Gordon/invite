import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContacts } from '../actions/contacts'



class Home extends Component {
  componentDidMount() {
    getContacts()
    console.log()
  }
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.contacts}</p>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    
    contacts: appState.contactsReducer.contacts
  }
}

export default connect(mapStateToProps)(Home)