import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import FeedDetails from './Screens/FeedDetails';
import Feed from './Screens/Feed';
import Feather from 'react-native-vector-icons/Feather';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();
class FeedStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={Feed}
          options={{
            headerTitle: () => null,
            headerLeft: () => (
              <View style={{flexDirection: 'row'}}>
                <Feather
                  style={{marginTop: 1, paddingLeft: 15, paddingRight: 5}}
                  name="menu"
                  size={25}
                  color="#000"
                  onPress={() => {
                    this.props.navigation.openDrawer();
                  }}
                />
                <Text style={{fontSize: 20, fontWeight: '500'}}>Posts</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen name="FeedDetails" component={FeedDetails} />
      </Stack.Navigator>
    );
  }
}

export default FeedStack;
