/**************************************************************************
  Central functional component to tweak different scenes/routes
  to which a user can navigate

  Color Scheme:

***************************************************************************/

import React from 'react'
import { Platform } from 'react-native'
import { Actions, Scene, Router } from 'react-native-router-flux'
import { Ionicons } from '@exponent/vector-icons'
import FindPubs from './components/FindPubs'
import PubList from './components/PubList'
import ShowPub from './components/ShowPub'
import PubMap from './components/PubMap'

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: Platform.OS === 'ios' ? 65 : 55 }}
      navigationBarStyle={{ backgroundColor: '#85C5C8' }}
      titleStyle={{ color: 'white' }}
      barButtonTextStyle={{ color: '#fef267' }}
      barButtonIconStyle={{ tintColor: 'rgb(254, 242, 103)' }}
      rightButtonTextStyle={{ color: '#ffca63' }}
      leftButtonTextStyle={{ color: '#ffca63' }}
    >
      <Scene key="main">
        <Scene initial key="findPubs" component={FindPubs} title="Barley Hopper" />
        <Scene key="pubList" component={PubList} title="Locations" />
        <Scene key="pubMap" component={PubMap} title="Map to Brewery" />
        <Scene key="showPub" component={ShowPub} title="Brewery Info" />
      </Scene>
    </Router>
  );
};

export default RouterComponent
