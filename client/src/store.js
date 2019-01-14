import { createStore, combineReducers } from 'redux'

import contactsReducer from './reducers/contactsReducer'
// import all reducers here

const rootReducer = combineReducers({
  contactsReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store