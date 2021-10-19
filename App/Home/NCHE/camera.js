import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

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
    console.log(str);
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
        />
      </View>
    );
  }
}

export default Camera;
