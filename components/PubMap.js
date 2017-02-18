import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
// import {
//   Container, Content, Button,
//   Input, Icon, Item, Title
// } from 'native-base';



class PubMap extends Component {

  render() {
    console.log(this.props.brewery[0])
    const lat = this.props.brewery[0].latitude
    const lon = this.props.brewery[0].longitude
    const region = {
      latitude: 40.6417724,
      longitude: -111.4946778,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    return (
      <View style={styles.container} >
        <Text>Map View</Text>
          <MapView
            style={styles.map}
            region={region}
          />
      </View>
    )
  }
}

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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// const styles = {
//   buttonStyle: {
//     alignSelf: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     width: 300
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// }

const mapStatetoProps = state => {
  const { brewery } = state.pub
  return { brewery }
}

export default connect(mapStatetoProps)(PubMap)
