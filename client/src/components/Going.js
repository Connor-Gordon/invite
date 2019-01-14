import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoing } from '../actions/contacts'
import { Link } from 'react-router-dom'

import '../styles/App.css'

class Going extends Component {
    componentDidMount(){
        getGoing()
    }

    render(){
        console.log(this.props)
        return (
            <div className = "notHomeContainer">
                <Link to="/"><p>Back to selection screen</p></Link>
                <h1>Going</h1>
                <div className="contactBox">
                    <ul className="contactInfo">
                    {this.props.going.map((title,i) => (
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
      going: appState.contactsReducer.going
    }
  }

  export default connect(mapStateToProps)(Going)