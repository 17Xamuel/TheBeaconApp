import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class ClassChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Xamuel</Text>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

export default ClassChat;
