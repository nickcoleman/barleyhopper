import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  Container, Content, Button,
  Input, Icon, Item, Title
} from 'native-base'
import { ListView } from 'react-native'
import ListOfPubs from './ListOfPubs'

class PubList extends Component {
  componentWillMount() {
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  onMapButtonPress() {
    Actions.pubMap()
    // console.log('onMapButtonPress')
  }

  createDataSource({ brewery }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(brewery)
  }

  renderRow(brewery) {
    return <ListOfPubs brewery={brewery} />
  }

  render() {
    // console.log(this.props.brewery)
    return (
      <Container style={styles.containerStyle}>
        <Content>
          <Button
            bordered rounded small warning
            style={styles.buttonStyle}
            onPress={this.onMapButtonPress.bind(this)}
          >
            Show Map
          </Button>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    )
  }
}

const styles = {

  containerStyle: {
    backgroundColor: '#ffcc80'
  },

  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    backgroundColor: '#fff'
  },

  listViewStyle: {
    backgroundColor: '#fff5e6'
  }
}

const mapStatetoProps = state => {
  const { brewery } = state.pub
  return { brewery }
}

export default connect(mapStatetoProps)(PubList)
