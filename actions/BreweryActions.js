/*
  App requires you add the following to the root directory: envConfig.js
  The file will contain api keys:
  export const GOOGLE_API_KEY = 'google api key'
  export const BREWDB_API_KEY = 'brewerydb api key'

  For info on brewery db visit: // http://www.brewerydb/developers/docs
*/

import { Actions } from 'react-native-router-flux'
import 'whatwg-fetch'
import {
  FETCH_BREWERY_FAILURE,
  FETCH_BREWERY_LOCATIONS_SUCCESS,
} from './types';
import { BREWDB_API_KEY, GOOGLE_API_KEY } from '../envConfig'

/********************************************************
           Brewery Actions
*********************************************************/

const BREWDB_BASE_URL = 'https://api.brewerydb.com/v2'

export const fetchBreweryLocationsSuccess = data => ({
  type: FETCH_BREWERY_LOCATIONS_SUCCESS,
  payload: data
})

export const fetchBreweryFailure = error => ({
  type: FETCH_BREWERY_FAILURE,
  payload: error
})

export const fetchBreweryLocations = (location = 'Denver') => dispatch => {
  const url = `${BREWDB_BASE_URL}/locations/?key=${BREWDB_API_KEY}&locality=${location}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.errorMessage) {
        // console.log(data.errorMessage)
        dispatch(fetchBreweryFailure('fetchBreweryFailure: ', data.errorMessage))
      } else {
        Actions.pubList()
        // console.log('fetchBreweryLocations data: ', data)
        dispatch(fetchBreweryLocationsSuccess(data))
      }
    })
    .catch(error => dispatch(fetchBreweryFailure('fetchBreweryFailure: ', error)));
};

export const fetchBreweryLocation = (name = '', location = '') => dispatch => {
  const url = `${BREWDB_BASE_URL}/location/?key=${BREWDB_API_KEY}&locality=${location}&name=${name}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.errorMessage) {
        // console.log(data.errorMessage)
        dispatch(fetchBreweryFailure('fetchBreweryFailure: ', data.errorMessage))
      } else {
        Actions.pubList()
        // console.log('fetchBreweryLocations data: ', data)
        dispatch(fetchBreweryLocationsSuccess(data))
      }
    })
    .catch(error => dispatch(fetchBreweryFailure('fetchBreweryFailure: ', error)));
};

export const fetchBreweryByGeoLocation = data => dispatch => {
  const location = data.results[0].address_components[3].long_name
  const region = data.results[0].address_components[5].short_name
  console.log(`location, region: ${location}, ${region}`)
  const url = `${BREWDB_BASE_URL}/locations/?key=${BREWDB_API_KEY}&locality=${location}&region=${region}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.errorMessage) {
        // console.log(data.errorMessage)
        dispatch(fetchBreweryFailure('fetchBreweryFailure: ', data.errorMessage))
      } else {
        Actions.pubList()
        // console.log('fetchBreweryLocations data: ', data)
        dispatch(fetchBreweryLocationsSuccess(data))
      }
    })
    .catch(error => dispatch(fetchBreweryFailure('fetchBreweryFailure: ', error)));
}

export const reverseGeoLocLookup = (lat = '40.732287', lon: '-111.8996689') => dispatch => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${GOOGLE_API_KEY}`
  const url2 = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.64177,-111.4946&key=${GOOGLE_API_KEY}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const address = data.results[0].formatted_address.split(',')
      const location = address[address.length - 3]
      dispatch(fetchBreweryLocations(location))
    })
    .catch(error => console.log('reverseGeoLocLookup Error: ', error.message))
}
