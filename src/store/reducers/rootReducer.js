import authReducer from './authReducer'
import serviceReducer from './serviceReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer
})

export default rootReducer