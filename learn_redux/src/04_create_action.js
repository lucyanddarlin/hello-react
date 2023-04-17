const store = require('./store')

const { changeAgeAction, changeNameAction } = require('./store/actionCreators')

store.subscribe(() => {
  console.log('state changed', store.getState());
})



store.dispatch(changeNameAction('darlin'))
store.dispatch(changeNameAction('jack'))
store.dispatch(changeAgeAction(44))