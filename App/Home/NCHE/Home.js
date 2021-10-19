import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="Camera"
            onPress={() => {
              this.props.navigation.navigate('Camera_NHCE');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
