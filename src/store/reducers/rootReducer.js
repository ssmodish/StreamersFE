import authReducer from './authReducer'
import serviceReducer from './serviceReducer'
import channelReducer from './channelReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
  channel: channelReducer
})

export default rootReducer