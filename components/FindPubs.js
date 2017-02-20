import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import {
  Card, Container, Content, Button,
  Input, Icon, Item, Title, Thumbnail,
} from 'native-base';
import { Image, View, Text } from 'react-native'

import {
  inputUpdate,
  fetchBreweryLocations,
  fetchBreweryLocation,
  reverseGeoLocLookup,
} from '../actions'

const barleylogo = require('./img/hops_and_barley.png')
const hopIcon = require('./img/barley-icon.png')
const beerRabbit = require('./img/beerRabbit.png')

class FindPubs extends Component {

  onSearchButtonPress() {
    if (!this.props.locationChoice) {
      // TODO: Error Message saying 'Location Required'
      // this.props.inputUpdate({ prop: 'locationChoice', value: 'Location Required' })
    } else if (this.props.pubChoice) {
      // finds specific brewery in a city
      this.props.fetchBreweryLocation(this.props.pubChoice, this.props.locationChoice)
    } else {
      this.props.fetchBreweryLocations(this.props.locationChoice)
    }
  }

  onCurrentLocationButtonPress() {
    // console.log('onCurrentLocationButtonPress')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          // console.log('lat-lon: ', latitude, ',', longitude)
          this.props.reverseGeoLocLookup(latitude, longitude)
        },
        (error) => alert(JSON.stringify(error)),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.log('navigator.geolocation failed')
    }
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
      <Content>
        <Thumbnail source={beerRabbit} style={styles.rabbitStyle} />
        <Title sytle={styles.titleStyle}>Brewery And Pub Locations </Title>
          <Input
            style={styles.inputStyle}
            placeholder="Enter City"
            autoCorrect={false}
            autoCapitalize={'none'}
            value={this.props.locationChoice}
            onChangeText={value => this.props.inputUpdate({ prop: 'locationChoice', value })}
          />


        <Button
          rounded warning
          style={styles.buttonSearchStyle}
          onPress={this.onSearchButtonPress.bind(this)}
        >
          Search
        </Button>

        <Text style={styles.textStyle}><Thumbnail source={hopIcon} style={styles.iconStyle} /></Text>
        <Button
          bordered rounded small warning
          style={styles.buttonCurrentLocatonStyle}
          onPress={this.onCurrentLocationButtonPress.bind(this)}
        >
          Or Use Current Location
        </Button>

        <Thumbnail source={barleylogo} style={styles.imageStyle} />
      </Content>

      </Container>

    )
  }
}

const styles = {

  containerStyle: {
    backgroundColor: '#ffcc80'
  },

  titleStyle: {
    marginTop: 30
  },

  textStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },

  buttonCurrentLocatonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    backgroundColor: '#fff'
  },

  buttonSearchStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 300,
  },

  inputStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    width: 300
  },

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  imageStyle: {
    marginTop: 30,
    width: 300,
    height: 125,
    alignSelf: 'center',
  },

  iconStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },

  rabbitStyle: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  }
}

const mapStatetoProps = (state) => {
  const { pubChoice, locationChoice } = state.user
  return { pubChoice, locationChoice };
}

export default connect(mapStatetoProps, {
  inputUpdate,
  fetchBreweryLocations,
  fetchBreweryLocation,
  reverseGeoLocLookup,
})(FindPubs)
