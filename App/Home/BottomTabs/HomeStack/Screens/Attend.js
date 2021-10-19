import React, {Component} from 'react';
// import {LinearGradient} from 'expo-linear-gradient';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';
// import Feather from 'react-native-vector-icons/Feather';
// import {Camera} from 'expo-camera';
// import {RNCamera as Camera} from 'react-native-camera';

//barcode scanner
// import BarCodeScanner from '../Components/barcode';
//barcode scanner

class Attend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    };
  }
  componentDidMount = async () => {
    // this.getPermissionsAsync();
    console.log(this.props.route.params.data);
    if (this.props.route.params.data != null) {
      alert(`Scanned Data: ${this.props.route.params.data}`);
    }
  };
  handleQR = () => {
    // if (this.state.hasCameraPermission === null) {
    //   alert('Scan QR Code requests for your Camera Permission');
    // }
    // if (this.state.hasCameraPermission === false) {
    //   alert('Scan QR Code requests for your Permission');
    // }
    // if (this.state.hasCameraPermission === true) {
    this.props.navigation.navigate('QrCode', {hasCameraPermission: true});
    // }
  };
  // getPermissionsAsync = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       this.setState({
  //         hasCameraPermission: true,
  //       });
  //     } else {
  //       this.setState({
  //         hasCameraPermission: false,
  //       });
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.formCtr}>
          <TextInput variant="outlned" mode="outlined" label="Class" />
          <TextInput
            variant="outlned"
            mode="outlined"
            multiline={true}
            label="Any Comment"
          />
          <Button title="Scan QR" onPress={this.handleQR} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Attend;

const styles = StyleSheet.create({
  formCtr: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: Dimensions.get('window').width * 0.05,
    marginVertical: Dimensions.get('window').width * 0.05,
    justifyContent: 'space-around',
    height: Dimensions.get('window').height * 0.7,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    borderColor: '#009783',
    borderWidth: 1,
    borderRadius: Dimensions.get('window').width * 0.3,
    padding: 5,
  },
  image: {
    backgroundColor: '#007bff',
    height: Dimensions.get('window').width * 0.25,
    width: Dimensions.get('window').width * 0.25,
    borderRadius: Dimensions.get('window').width * 0.125,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
