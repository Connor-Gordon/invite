const express = require('express')
const Router = express.Router()
const axios = require('axios')

let contacts = []

axios.get('https://randomuser.me/api/?results=100&?inc=picture,name,email,phone?').then(resp =>{
  contacts = resp.data.results.map((contact,i) => (
    ({
      id: i + 1,
      pic: contact.picture.large, 
      fname: contact.name.first,
      lname: contact.name.last,
      email: contact.email,
      phone: contact.phone,
      status: 'pending'
    })
  ))

Router.get('/contacts', (req, res, next) => {
  res.json({
    contact: contacts.find(contact => contact.status === 'pending')
  })
 }) 
})


 Router.patch('/contacts', (req,res, next) => {
   const id = req.body.id
   const status = req.body.status

   contacts = contacts.map(contact => {
     if (contact.id == id) {
       return {...contact, status: status}
     } else {
       return contact
     }
   })
   res.json (contacts)
 })

 Router.get('/going', (req, res, next) => {
   var going = contacts.filter(contact => contact.status === 'going')
   res.json(going)
 })

 Router.get('/notgoing', (req, res, next) => {
   var notgoing= contacts.filter(contact => contact.status === 'not going')
   res.json(notgoing)
 })
module.exports = Router