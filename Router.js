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
      sceneStyle={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}
      navigationBarStyle={{ backgroundColor: '#DC8351' }}
      titleStyle={{ color: 'white' }}
      barButtonTextStyle={{ color: '#fff' }}
      barButtonIconStyle={{ tintColor: 'rgb(254, 242, 103)' }}
      rightButtonTextStyle={{ color: '#ffe180' }}
      leftButtonTextStyle={{ color: '#ffe180' }}
    >
      <Scene key="main">
        <Scene initial key="findPubs" component={FindPubs} title="Barley Hopper" />
        <Scene key="pubList" component={PubList} title="Locations" onLeftTitle="Home" onLeft={() => Actions.findPubs({ type: 'reset' })} />
        <Scene key="pubMap" component={PubMap} title="Map to Brewery" />
        <Scene key="showPub" component={ShowPub} title="Brewery Info" onLeftTitle="<" onLeft={() => Actions.pubList()} />
      </Scene>
    </Router>
  );
};

export default RouterComponent
