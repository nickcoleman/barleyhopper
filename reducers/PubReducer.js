import React from 'react'

import {
  FETCH_BREWERY_LOCATIONS_SUCCESS,
} from '../actions'

const INITIAL_STATE = {
  brewery: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_BREWERY_LOCATIONS_SUCCESS: {
      console.log(action.payload)
      return { ...state, brewery: action.payload.data }
    }

    default:
      return state
  }
}
