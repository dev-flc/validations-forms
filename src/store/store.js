import reducers from "Config/reducers.js"

import { state } from "Config/state.js"

import { applyMiddleware, compose, createStore } from "redux"

import thunk from "redux-thunk"

const middleWareGeneral = (store) => (next) => (action) => next(action)

const INITIAL_STORE = compose(applyMiddleware(thunk, middleWareGeneral))(
  createStore
)

const store = INITIAL_STORE(
  reducers,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
