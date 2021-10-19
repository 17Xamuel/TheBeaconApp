import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import Attend from './Screens/Attend';
import ClassChat from './Screens/ClassChat';
import ClassFeed from './Screens/ClassFeed';
import ClassNotes from './Screens/ClassNotes';
import CourseWork from './Screens/CourseWork';
import FeedDetails from './Screens/FeedDetails';
import Home from './Screens/Home';
import BarcodeScanner from './Screens/qrcodescan';

const Stack = createStackNavigator();
class HomeStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen name="Attend" component={Attend} />
        <Stack.Screen name="CourseWork" component={CourseWork} />
        <Stack.Screen name="ClassNotes" component={ClassNotes} />
        <Stack.Screen name="ClassChat" component={ClassChat} />
        <Stack.Screen name="ClassFeed" component={ClassFeed} />
        <Stack.Screen name="FeedDetails" component={FeedDetails} />
        <Stack.Screen
          name="QrCode"
          component={BarcodeScanner}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
