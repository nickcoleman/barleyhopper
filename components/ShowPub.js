import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Linking } from 'react-native'
import {
  Button, Container, Content, Card,
  Thumbnail, Title,
} from 'native-base'
import Communications from 'react-native-communications'

class ShowPub extends Component {

  handleMapClick = (name, longitude, lattitude) => {
    Linking.openURL(`http://maps.apple.com/?q=${name}&ll=${longitude},${lattitude}&z=10`)
  }

  handleLinkClick = (website) => {
    Linking.canOpenURL(website).then(supported => {
      if (supported) {
        Linking.openURL(website);
      } else {
        console.log('Don\'t know how to open URI: ' + website);
      }
    });
  };

  handlePhoneClick = (phone) => {
    Communications.phonecall(phone, true)
    console.log('Phone Call Simulated')
  }

  render() {
    console.log(this.props.location)
    const {
      brewery, breweryId, lattitude, longitude, locationTypeDisplay, yearOpened,
      phone, streetAddress, locality, region, postalCode
    } = this.props.location
    let medium = '';
    if ( brewery.images !== undefined) {
      medium = brewery.images.medium
    }
    const {
      id, established, name, description, website,
    } = brewery

    return (
      <Container style={styles.containerStyle}>
        <Content>
            <Title style={styles.headerTitleStyle}>
              {name}
            </Title>
          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>Address:</Text>
            <Text style={styles.centerStyle}>{streetAddress}</Text>
            <Text style={styles.centerStyle}>{locality}, {region} {postalCode}</Text>
            <Button
              bordered round small warning
              style={styles.buttonStyle}
              onPress={() => this.handleMapClick(name, longitude,lattitude)}
            >
              Map It
            </Button>
          </Card>
          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>Phone Number:</Text>
            <Text style={styles.centerStyle}>{phone || '<none provided>'}</Text>
            <Button
              bordered round small warning
              style={styles.buttonStyle}
               onPress={() => this.handlePhoneClick(phone)}
            >Call</Button>
          </Card>

          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>Website:</Text>
            <Text style={styles.centerStyle} onPress={() => this.handleLinkClick(website)}>{website || '<none provided>'}</Text>
          </Card>

          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>More Info:</Text>
            <Thumbnail source={{uri: medium}} style={styles.imageStyle} />

            <Text style={styles.textInfoStyle}>
              <Text style={{color: '#cc7a00'}}>Established: </Text>
              {established  || 'unknown'}
            </Text>

            <Text style={styles.textInfoStyle}>
              <Text style={{color: '#cc7a00'}}>Type: </Text>
              {locationTypeDisplay  || 'Pub'}
            </Text>

            <Text style={styles.textInfoStyle}>
              <Text style={{color: '#cc7a00'}}>Description: </Text>
              {description || '<none provided>'}
            </Text>
          </Card>
        </Content>
      </Container>
    )
  }
}
// Linking.openURL(url)

styles = {

  containerStyle: {
    backgroundColor: '#ffcc80'
  },

  headerTitleStyle: {
    paddingTop:10,
    paddingBottom: 10
  },

  cardStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#ffe0b3'
  },

  sectionTitleStyle: {
    fontWeight: 'bold'
  },

  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    backgroundColor: '#fff5e6'
  },

  centerStyle: {
    alignSelf: 'center',
    marginTop: 10
  },

  textStyle: {
    paddingLeft: 20,
    paddingRight: 20
  },

  textInfoStyle: {
    marginTop: 10
  },

  imageStyle: {
    marginTop: 30,
    width: 300,
    height: 125,
    alignSelf: 'center',
    backgroundColor: '#ffe0b3'
  }
};

export default ShowPub
