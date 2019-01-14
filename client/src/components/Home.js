
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContacts, sendStatus, getGoing, getNotGoing } from '../actions/contacts'

import '../styles/App.css'


class Home extends Component {
  componentDidMount() {
    getContacts()
    getGoing()
    getNotGoing()
  }
  
  going = (e) => {
   sendStatus(this.props.contact.id, 'going') 
  } 
 
   notGoing = (e) => {
    sendStatus(this.props.contact.id, 'not going')
   }
 


  render() {

    const contact = this.props.contact
    return (
      <div >
        <div className = "arrayLinks">
          <Link to="/going"><p>Going: {this.props.going.length}</p></Link>
          <Link to="/notgoing"><p>Not going:{this.props.notgoing.length}</p></Link>
        </div> 
        <div className="homeContainer">     
        <img className="image" src={contact.pic} alt="missing"/> 
        <ul className="contactInfo">
           <li>
              <p><b>Name:</b> {contact.fname} {contact.lname}</p>
              <p><b>Home:</b> {contact.phone}</p>
              <p><b>Email:</b> {contact.email}</p>
           </li>
        </ul>
    
        <div className="buttons">
          <button onClick={this.going}>Going</button>
          <button onClick={this.notGoing} >Not going</button> 
        </div>
        </div>   
        
      </div>
    )
  }
}



function mapStateToProps(appState) {
  console.log('appstate', appState)
  return {
    contact: appState.contactsReducer.contact,
    going: appState.contactsReducer.going,
    notgoing: appState.contactsReducer.notgoing
  }
}

export default connect(mapStateToProps)(Home)