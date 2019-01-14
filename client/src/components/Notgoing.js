import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotGoing } from '../actions/contacts'
import { Link } from 'react-router-dom'

import '../styles/App.css'


class Notgoing extends Component {
    componentDidMount(){
        getNotGoing()
    }

    render(){
        return (
            <div className = "notHomeContainer">
            <Link to="/"><p>Back to selection screen</p></Link>
            <h1>Not Going</h1>
            <div className="box">
                <ul className="contactInfo">
                {this.props.notgoing.map((title,i) => (
                    <li key={'title' + i}>
                        <img className="image" key={'pic' + i} src={title.pic} alt="missing"/> 
                        <p><b>name:</b> {title.fname} {title.lname}</p>
                        <p><b>phone:</b> {title.phone}</p>
                        <p><b>email:</b> {title.email}</p>
                    </li>
                ))}

                </ul>
            </div>
        </div>
        )
    }
}


function mapStateToProps(appState) {
    console.log('appstate', appState)
    return {
      notgoing: appState.contactsReducer.notgoing
    }
  }

  export default connect(mapStateToProps)(Notgoing)