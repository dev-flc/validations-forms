import { ACTIONS_TITLE } from "Constants/constantStore.js"

const reducerTitle = (state = {}, action = {}) => {
  if (!state) {
    return null
  }

  let newState = state
  const { type, payload } = action

  if (type === ACTIONS_TITLE.SET_ACTION_TITLE) {
    newState = payload
  }

  return newState
}

export { reducerTitle }
