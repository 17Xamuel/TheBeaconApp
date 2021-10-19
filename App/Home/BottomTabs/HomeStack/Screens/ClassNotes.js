import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CourseNotes} from '../../../../Components/notes';

class ClassNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <CourseNotes />
        </View>
      </SafeAreaView>
    );
  }
}

export default ClassNotes;
const styles = StyleSheet.create({});
