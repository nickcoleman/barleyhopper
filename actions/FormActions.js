import {
  INPUT_UPDATE,
} from './types'

export const inputUpdate = ({ prop, value }) => ({
  type: INPUT_UPDATE,
  payload: { prop, value }
})
