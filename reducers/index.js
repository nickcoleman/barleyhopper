import { combineReducers } from 'redux'

import PubReducer from './PubReducer'
import UserReducer from './UserReducer'

export default combineReducers({
  pub: PubReducer,
  user: UserReducer,
})
