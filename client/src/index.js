// only place to use react-dom module
// used to interact with dom because react does not directly interact with dom
// import app which is our main component


import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
