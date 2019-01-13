// store is to combine reducers and outputs object that allows us to dispatch or subscribe
// send information into store and store will send it out to whoever needs it


// import the functions createStore and combineReducers from redux
import { createStore, combineReducers } from 'redux'

// import all reducers here
import contactsReducer from './reducers/contactsReducer'

// put all reducers into a function with a single object called rootReducer
const rootReducer = combineReducers({
  // put reducers here, seperated by commas
  contactsReducer
})

// put the reducers in function createStore and save it to the constant store
const store = createStore(rootReducer)

export default store