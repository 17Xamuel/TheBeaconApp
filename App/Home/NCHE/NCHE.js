import React, {Component} from 'react';

//nav
import {createStackNavigator} from '@react-navigation/stack';

//components
import Camera from './camera';
import Home from './Home';

const Stack = createStackNavigator();

class NCHE extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home_NHCE" component={Home} />
        <Stack.Screen name="Camera_NHCE" component={Camera} />
      </Stack.Navigator>
    );
  }
}

export default NCHE;
