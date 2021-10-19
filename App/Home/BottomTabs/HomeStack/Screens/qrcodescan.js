import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
// import {BarCodeScanner} from 'expo-barcode-scanner';
import {RNCamera} from 'react-native-camera';

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: this.props.route.params.hasCameraPermission,
    scanned: false,
  };

  render() {
    const {hasCameraPermission, scanned} = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!scanned && (
          <RNCamera
            // onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            ref={ref => {
              this.camera = ref;
            }}
            onGoogleVisionBarcodesDetected={this.handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, styles.container]}>
            <View style={styles.layerTop} />
            <View style={styles.layerCenter}>
              <View style={styles.layerLeft} />
              <View style={styles.focused} />
              <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom} />
          </RNCamera>
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({type, data}) => {
    this.setState({
      scanned: true,
    });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.props.navigation.navigate('Attend', {data});
  };
}
const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layerTop: {
    flex: 0.5,
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
    flex: 0.5,
    backgroundColor: opacity,
  },
});
