import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle} >
      <ActivityIndicator size={size || 'large'} />
      <Text>Logging In</Text>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center',

  }
};

export { Spinner };
