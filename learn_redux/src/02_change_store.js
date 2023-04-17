const store = require('./store')

console.log(store.getState());

const nameAction = { type: 'changeName', name: 'darlin' }

store.dispatch(nameAction)
console.log(store.getState());