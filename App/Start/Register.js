import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {passwordVisible: false, username: '', password: ''};
  }
  togglePassword = () => {
    this.setState({
      ...this.state,
      passwordVisible: !this.state.passwordVisible,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View style={styles.welcome} animation="fadeIn">
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
              paddingHorizontal: 20,
            }}>
            Sign Up
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
              paddingHorizontal: 20,
            }}>
            On The Beacon
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.login} animation="fadeInUpBig">
          <View>
            <TextInput
              style={styles.input_ctr}
              label="Username"
              mode="outlined"
              right={<TextInput.Icon name="account-circle-outline" />}
              onChange={e => {
                this.setState({...this.state, username: e});
              }}
            />
            <TextInput
              style={styles.input_ctr}
              label="Password"
              mode="outlined"
              secureTextEntry={!this.state.passwordVisible}
              onChange={e => {
                this.setState({...this.state, password: e});
              }}
              right={
                <TextInput.Icon
                  name={this.state.passwordVisible ? 'eye-off' : 'eye'}
                  onPress={this.togglePassword}
                />
              }
            />
            <TextInput
              style={styles.input_ctr}
              label="Password"
              mode="outlined"
              secureTextEntry={!this.state.passwordVisible}
              onChange={e => {
                this.setState({...this.state, password_repeat: e});
              }}
              right={
                <TextInput.Icon
                  name={this.state.passwordVisible ? 'eye-off' : 'eye'}
                  onPress={this.togglePassword}
                />
              }
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('Data', JSON.stringify(this.state));
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                paddingBottom: 5,
                marginRight: 15,
              }}>
              Register
            </Text>
            <FontAwesome5Icon name="chevron-right" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text
              style={{paddingRight: 5, paddingVertical: 5}}
              onPress={() => {
                this.props.navigation.navigate('register');
              }}>
              No Account? Register.
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009783',
  },
  login: {
    flex: 4.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcome: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingVertical: 15,
  },

  input_ctr: {
    marginBottom: 32,
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#009783',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: 5,
  },
});
export default Register;
