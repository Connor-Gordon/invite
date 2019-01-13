import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContacts, sendStatus } from '../actions/contacts'
import { getGoing } from '../actions/going';
import { getNotgoing } from '../actions/notgoing';



class Contacts extends Component {

  componentDidMount() {
    getContacts()
    getGoing()
    getNotgoing()
    console.log("Component:", this.props.contacts)
  }
  
  going = (e) => {
    sendStatus(this.props.person.id, 'going') 
   } 
  
    notGoing = (e) => {
     sendStatus(this.props.person.id, 'not going')
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

function mapStateToProps(appState) {
  return {
    
    contacts: appState.contactsReducer.contacts,
    going: appState.contactsReducer.going,
    notgoing: appState.contactsReducer.notgoing
  }
}

export default connect(mapStateToProps)(Contacts)