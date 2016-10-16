import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//const enhancer = composeEnhancers(applyMiddleware(logger))
const enhancer = applyMiddleware(logger, generateId)

const store = createStore(reducer, {}, enhancer)

window.store = store
export default store
