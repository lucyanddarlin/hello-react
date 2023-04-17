const store = require('./store')

store.subscribe(() => {
  console.log('state changed', store.getState());
})


const nameAction = { type: 'changeName', name: 'darlin' }
const nameAction2 = { type: 'changeName', name: 'jack' }
const ageAction = { type: 'changeAge', age: 33 }

store.dispatch(nameAction)
store.dispatch(nameAction2)
store.dispatch(ageAction)