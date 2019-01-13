// reducer is function that takes in a state and action, and outputs new state
// called reducer cuz it takes in two params and reduces to one state
// once reducer is called, it will connect to mapStateToProps fn in components


// create and initial state with an empty array called contacts
const initialState = {
  contacts: {},
  going: [],
  notgoing: []
}

// export a function that sets state = to initialState and takes in an action 

export default function (state = initialState, action) {
  // use a switch to say if action.type is GET_CONTACTS, complete the action and return the new state
  switch (action.type) {
    // add actions here
    case 'GET_CONTACTS':
      return {...state, contacts: action.contacts}
    case 'GET_GOING':
     return {...state, going: action.going}
    case 'GET_NOTGOING':
      return {...state, notgoing: action.notgoing}
    default:
      return state
  }
}

// switch is same as writing if statements

// export default function (state = initialState, action) {
//   if (action.type === "EXAMPLE") {
//     return {...state, contacts: action.contacts}
//   } else if (action.type === "SOME_OTHER_ACTION") {
//     return {...state, contacts: action.contacts}
//   } else {
//     return state
//   }
// }