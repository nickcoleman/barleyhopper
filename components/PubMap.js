import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Components } from 'exponent';
import { View, Dimensions, StyleSheet, Text } from 'react-native'
// import {
//   Container, Content, Button,
//   Input, Icon, Item, Title
// } from 'native-base';



class PubMap extends Component {
  renderMarkers() {
    console.log('renderMarkers called')
    return this.props.brewery.map(marker => {
      console.log(marker.id, marker.brewery.name, marker.lattitude, marker.longitude)
       return (
          <Components.MapView.Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            pinColor="blue"
            title={marker.brewery.name}
          />
        )
    })
  }

  render() {
    const region = {
      latitude: this.props.brewery[0].latitude,
      longitude: this.props.brewery[0].longitude,
      latitudeDelta: 0.1844,
      longitudeDelta: 0.0842,
    }

    return (
        <Components.MapView
          style={styles.map}
          initialRegion={region}
          loadingEnabled
        >
          {this.renderMarkers()}
        </Components.MapView>
    )
  }
}

// <Components.MapView.Marker
//   coordinate={{
//     latitude: lat,
//     longitude: lon,
//   }}
//   pinColor="orange"
//   title="Test Point"
//   description="Test Point description"
// />
// <Components.MapView.Marker
//   coordinate={{
//     latitude: this.props.brewery[1].latitude,
//     longitude: this.props.brewery[1].longitude,
//   }}
//   pinColor="black"
//   title="Test Point 2"
//   description="Test Point 2 description"
// />

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const mapStatetoProps = (state) => {
  const { brewery } = state.pub
  return { brewery }
}

export default connect(mapStatetoProps)(PubMap)
