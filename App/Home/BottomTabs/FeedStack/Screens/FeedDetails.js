import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class FeedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Xamuel-{this.props.route.params.id}</Text>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Button
          title="Drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}

export default FeedDetails;
