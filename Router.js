/**************************************************************************
  Central functional component to tweak different scenes/routes
  to which a user can navigate
***************************************************************************/

import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import FindPubs from './components/FindPubs'
import PubList from './components/PubList'
import ShowPub from './components/ShowPub'
import PubMap from './components/PubMap'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}} >
      <Scene key="main">
        <Scene initial key="findPubs" component={FindPubs} title="Barley Hopper" />
        <Scene key="pubList" component={PubList} title="Locations" />
        <Scene key="showPub" component={ShowPub} title="Brewery Info" />
        <Scene key="pubMap" component={PubMap} title="Map to Brewery" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
