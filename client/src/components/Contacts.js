import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContacts } from '../actions/contacts'




class Contacts extends Component {
  state ={
    contacts: []
  }
  componentDidMount() {
    getContacts()
    console.log(this.props)
    console.log(this.state)


  }
  
  render() {
    return (
      <div>
        <h1>here be contacts</h1>
        <p>{this.contacts}</p>
      </div>
    )
  }
}

function mapStateToProps(initialState) {
  return {
    
    contacts: initialState.contactsReducer.contacts
  }
}

export default connect(mapStateToProps)(Contacts)