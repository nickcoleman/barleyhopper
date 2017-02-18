import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    // Actions.showPub()
    Actions.showPub({location: this.props.brewery})
  }

  render() {
    // console.log(this.props.brewery.brewery)
    const { name } = this.props.brewery.brewery;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.sectionStyle}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  sectionStyle: {
    backgroundColor: '#ffffcc'
  },

  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
