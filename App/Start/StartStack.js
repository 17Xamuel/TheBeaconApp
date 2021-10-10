import React from 'react';

//navigation
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Login from './Login';
import Onboard from './Onboard';
import Register from './Register';

//Big nav
import Drawer from '../Home/Drawer/Drawer';

const Stack = createStackNavigator();
function StartStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </>
  );
}

export default StartStack;
