import React from 'react'

import {
  INPUT_UPDATE,
} from '../actions'

const INITIAL_STATE = {
  locationChoice: '',
  pubChoice: ''
}

export default (state = INITIAL_STATE, action) => {
  // console.log(action.payload)
  switch (action.type) {

    case INPUT_UPDATE: {
      // example: action.payload = {prop: 'name', value: 'Will Smith'}
      // key interpolation -> [prop]
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    }

    default:
      return state
  }
}
