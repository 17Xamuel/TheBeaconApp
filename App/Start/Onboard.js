import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'TheBeacon App',
    text: 'Welcome \nto TheBeacon App',
    image: require('../../Resources/start/educ.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Assignments',
    text: 'Get Your \nAssignments \nAnd Notes in one place',
    image: require('../../Resources/start/exams.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Attendance',
    text: 'Scan a QR code \nto Mark Your Attendance, \n\nIts Fun',
    image: require('../../Resources/start/std_reading.png'),
    backgroundColor: '#22bcb5',
  },
];

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    this.props.navigation.navigate('Login');
  };

  onSkip = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onSkip={this.onSkip}
        showSkipButton={true}
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(58, 92, 170, 0.45)',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 48,
    borderRadius: 250 / 2,
    padding: 25,
  },
  text: {
    // color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    // color: 'white',
    textAlign: 'center',
  },
});

export default Onboard;
