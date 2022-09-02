import { combineReducers } from "redux"

import { reducerTheme } from "Reducers/reducerTheme.js"
import { reducerTitle } from "Reducers/reducerTitle.js"

const allReducers = combineReducers({
  theme: reducerTheme,
  title: reducerTitle,
})

export default allReducers
