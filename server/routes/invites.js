// import and use express and axios

const express = require('express')
const axios = require('axios')

const Router = express.Router()

// set const data to an object containing 3 arrays to store data for the different pages
const data = {
  contacts: [],
  going: [],
  notgoing: []
}

// use express router to send get request to localhost3001/contacts with the paramaters request, response and next
Router.get('/contacts', (req, res, next) => {
  // if the length of the array data.contacts is = 0 then...
  if (data.contacts.length === 0){
    // get the results from randomuser generator and then set that as the response
    axios.get('https://randomuser.me/api/?results=100').then(resp => {
      // set data.contacts equal to an indivuals {} 
      data.contacts = resp.data.results.map((contact, i) => {
        // and set an id that increments up by one with each new contacts
        contact.id = i + 1
        // return that contact
        return contact
      })
      res.json(data.contacts)
      })
    // if the length of the array data.contacts does not = 0 then...  
    } else {
      res.json(data.contacts)
    }
})

Router.get('/going', (req, res, next) => {
  res.json(data.going)
})

Router.get('/notgoing', (req, res, next) => {
  res.json(data.notgoing)
})



Router.patch('/going', (req, res, next) => {
  const id = req.body.id



// constants filter to check through arrays of contacts

  const contactIsGoing = data.going.filter(person => id == person.id).length !== 0
  const contactIsNotGoing = data.notgoing.filter(person => id == person.id).length !== 0
  const contactIsUndecided = data.contacts.filter(person => id == person.id).length !== 0

  // if contact is undecided then...
  if(contactIsUndecided) {
  const contact = data.contacts.find(person => id == person.id)
  data.contacts = data.contacts.filter(person => id != person.id)
  data.going.push(contact)
  }

  // if the contact is not going...
  if(contactIsNotGoing) {
    const contact = data.notgoing.find(person => id == person.id)
    data.contacts = data.notgoing.filter(person => id != person.id)
    data.going.push(contact)
  }

res.json(data.going)
})

Router.patch('/notgoing', (req, res, next) => {
  const id = req.body.id
  
    const contactIsGoing = data.going.filter(person => id == person.id).length !== 0
    const contactIsNotGoing = data.notgoing.filter(person => id == person.id).length !== 0
    const contactIsUndecided = data.contacts.filter(person => id == person.id).length !== 0
  
  
    if(contactIsUndecided) {
    const contact = data.contacts.find(person => id == person.id)
    data.contacts = data.contacts.filter(person => id != person.id)
    data.notgoing.push(contact)
    }
  
    if(contactIsGoing) {
      const contact = data.going.find(person => id == person.id)
      data.going = data.going.filter(person => id != person.id)
      data.notgoing.push(contact)
    }
  
  res.json(data.notgoing)
})

module.exports = Router
