import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import * as Linking from "expo-linking";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.ctr}>
          <View style={styles.titleCtr}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: '#fff',
                  paddingVertical: 3,
                }}>
                TheBeacon
              </Text>
              <Text style={{fontSize: 14, color: '#fff'}}>
                Quick Links from TheBeacon
              </Text>
            </View>
          </View>
          <View style={styles.linksCtr}>
            <View style={styles.link}>
              <Feather name="user-plus" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://student.lirauni.ac.ug');
                }}>
                Student Portal
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="link-2" size={24} color="#000" />

              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://lirauni.ac.ug');
                }}>
                University Website
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="shopping-cart" size={24} color="#000" />

              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://www.yammieshoppers.com');
                }}>
                Yammie Shoppers
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="airplay" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://www.beaconnetug.com');
                }}>
                Beaconnet
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="file-plus" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://campusweekly.herokuapp.com');
                }}>
                Campus Weekly
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
  },
  titleCtr: {
    flex: 1,
    backgroundColor: '#0053FF',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  linksCtr: {
    flex: 2,
  },
  link: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  linkText: {
    marginHorizontal: 15,
    paddingTop: 3,
    fontSize: 14,
  },
});
export default Links;
