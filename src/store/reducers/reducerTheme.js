import { ACTIONS_THEME } from "Constants/constantStore.js"

const reducerTheme = (state = {}, action = {}) => {
  if (!state) {
    return null
  }

  let newState = state
  const { type, payload } = action

  if (type === ACTIONS_THEME.SET_ACTION_MODE_IS_DARK) {
    newState = { ...state, modeIsDark: payload }
  }

  return newState
}

export { reducerTheme }
