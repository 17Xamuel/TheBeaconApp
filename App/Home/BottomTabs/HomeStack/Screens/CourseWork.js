import React, {Component} from 'react';
import {Button, Image, SafeAreaView, Text, View} from 'react-native';
import Blank from '../../../../Components/blank';

class CourseWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Blank title="!!!Oops, No Course Work Available" />
      </SafeAreaView>
    );
  }
}

export default CourseWork;
