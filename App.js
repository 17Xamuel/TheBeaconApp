import React, {Component} from 'react';
import {BackHandler, Text, View, Alert} from 'react-native';

//storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//start stacks
import StartStack from './App/Start/StartStack';
import Drawer from './App/Home/Drawer/Drawer';
import {NavigationContainer} from '@react-navigation/native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {start: null};

    this.loData();
  }

  loData = () => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          this.setState({...this.state, start: 'user'});
        } else {
          this.setState({...this.state, start: 'user_null'});
        }
      } catch (error) {
        if (error) {
          Alert.alert(
            'App Crash',
            'Your App Crashed Due to initialization Error, Try Unistalling and Install Again',
            [
              {
                text: 'Ok',
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
            ],
          );
        }
      }
    }, 3000);
  };
  render() {
    if (this.state.start === null) {
      return <Splash />;
    }
    return <AppContent start={this.state.start} />;
  }
}

//content
const AppContent = ({start}) => {
  if (start === 'user') {
    return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    );
  }
};

//holds splash screen
const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20}}>Loading App...</Text>
    </View>
  );
};

export default App;
