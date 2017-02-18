import { combineReducers } from 'redux'

import PubReducer from './PubReducer'
import UserReducer from './UserReducer'
import FormReducer from './FormReducers'

export default combineReducers({
  pub: PubReducer,
  user: UserReducer,
  form: FormReducer
})
