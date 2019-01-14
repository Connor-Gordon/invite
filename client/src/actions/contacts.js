import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getContacts() {
  axios.get('/contacts').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_INFO', 
      contact: resp.data.contact
    })
  })
  getGoing()
  getNotGoing()
  
}
export function sendStatus(id, status) {
  axios.patch('/contacts' , {
    id: id,
    status: status 
  }) .then(resp =>{
   getContacts()
  })
}


export function getGoing() {
  axios.get('/going').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_GOING',
      going: resp.data
    })
  })
}

export function getNotGoing() {
  axios.get('/notgoing').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_NOT_GOING',
      notgoing: resp.data
    })
  })
}