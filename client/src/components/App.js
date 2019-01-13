// importing provider here on app allows us to use react redux on any other components inside the provider
// import store to allow data transfer

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Contacts} />

          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
