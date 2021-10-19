import React from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Blank(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="delete-empty-outline" size={120} />
      {/* <Image
        source={require("../assets/blank.png")}
        resizeMode="cover"
        style={{ width: 150, height: 150 }}
      /> */}
      <Text style={{ fontSize: 14, marginVertical: 10 }}>{props.title}</Text>
    </View>
  );
}
