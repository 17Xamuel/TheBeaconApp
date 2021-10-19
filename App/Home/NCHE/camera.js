import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Feather from 'react-native-vector-icons/Feather';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  barCodeRead = code => {
    console.log(barcodes);
    // barcodes.forEach(barcode => console.warn(barcode.data));
  };
  textRecognized = ({textBlocks}) => {
    let str = '';
    textBlocks.forEach(textBlock => {
      str += textBlock.value;
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <RNCamera
          ref={ref => (this.camera = ref)}
          style={{flex: 1, width: '100%'}}
          // onBarCodeRead={this.barCodeRead}
          onTextRecognized={this.textRecognized}
          // onGoogleVisionBarcodesDetected={this.barCodeRead}
        >
          <Text
            style={{
              fontSize: 18.5,
              position: 'absolute',
              left: 20,
              top: 20,
              color: 'white',
            }}>
            Aim Camera at the receipt
          </Text>
          <View style={styles.layerTop} />
          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
          </View>
          <View style={styles.layerBottom} />
        </RNCamera>
      </View>
    );
  }
}

export default Camera;

const opacity = 'rgba(0, 0, 0, .4)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layerTop: {
    flex: 0.25,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 0.25,
    backgroundColor: opacity,
  },
});
