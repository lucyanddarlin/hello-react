const { CHANGE_AGE, CHANGE_NAME } = require('./constant')

const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name

})

const changeAgeAction = (age) => ({
  type: CHANGE_AGE,
  age
})


module.exports = {
  changeAgeAction,
  changeNameAction
}