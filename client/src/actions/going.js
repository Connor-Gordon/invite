import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getGoing() {
  axios.get('/Going').then(resp => {
    console.log("Going response:", resp)
    store.dispatch({
      type: 'GET_GOING', 
      going: resp.data.going
    })
  })
}