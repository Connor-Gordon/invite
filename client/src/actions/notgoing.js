import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getNotgoing() {
  axios.get('/Notgoing').then(resp => {
    console.log("Notgoing Response:", resp)
    store.dispatch({
      type: 'GET_NOTGOING', 
      notgoing: resp.data.notgoing
    })
  })
}