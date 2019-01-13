// importing provider here on app allows us to use react redux on any other components inside the provider
// import store to allow data transfer

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Contacts from './Contacts'
import Going from './Going'
import Notgoing from './Notgoing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Contacts} />
            <Route path="/going" component={Going}/>
            <Route path="/notgoing" component={Notgoing} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
