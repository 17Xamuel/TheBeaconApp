import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import Attend from "../screens/Attend";
import ClassChat from "../screens/ClassChat";
import ClassFeed from "../screens/ClassFeed";
import ClassNotes from "../screens/ClassNotes";
import CourseWork from "../screens/CourseWork";
import FeedDetails from "../screens/FeedDetails";
import Home from "../screens/Home";
import BarcodeScanner from "../screens/qrcodescan";

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
          options={{ header: () => null }}
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
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
