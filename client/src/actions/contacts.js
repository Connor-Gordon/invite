// import axios and store
import axios from 'axios'
import store from '../store'

// set the backend to be hidden behind /api
axios.defaults.baseURL = '/api'

export function getContacts() {
  axios.get('/contacts')
  .then(resp => {
    console.log('HERE', resp.data)
    console.log()
    store.dispatch({
      type: 'GET_CONTACTS', 
      contacts: resp.data
    })
  })
}