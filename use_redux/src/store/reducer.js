import { ACTION_TYPE } from "./constants"

const initialState = {
  count: 100,
  banners: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_COUNT:
      return { ...state, count: state.count + action.count }
    case ACTION_TYPE.CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    default:
      return state
  }
}

export default reducer