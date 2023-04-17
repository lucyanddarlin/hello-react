const { CHANGE_AGE, CHANGE_NAME } = require('./constant')

// 初始化 state
const initialState = {
  name: 'lucy',
  age: 20
}


// params1: store 中目前保存的 state
// params2: 需要修改的 action
function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case CHANGE_AGE:
      return { ...state, age: action.age }
  }
}

module.exports = reducer