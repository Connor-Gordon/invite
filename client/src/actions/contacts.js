// import axios and store
import axios from 'axios'
import store from '../store'

// set the backend to be hidden behind /api
axios.defaults.baseURL = '/api'

// export fn getContacts to be recieved by other components
export function getContacts() {
  // axios get call to pull data from /contacts
  axios.get('/contacts').then(resp => {
    console.log('Contacts Response:', resp.data)
    store.dispatch({
      type: 'GET_CONTACTS', 
      contacts: resp.data
    })
  })
}

export function sendStatus(id, status) {
  axios.patch('/contacts',{
    id: id,
    status: status 
  }).then(resp =>{
   getContacts()
  })
}