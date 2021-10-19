import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.ctr}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <Feather
                style={{marginTop: 1, paddingRight: 10}}
                name="menu"
                size={25}
                color="#000"
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
              />
              <Text style={{fontSize: 20, fontWeight: '500'}}>Posts</Text>
            </View>
            <View style={styles.plusIconCtr}>
              <Feather name="plus" size={20} color="#fff" />
            </View>
          </View>
          <View style={styles.postsCtr}>
            <View style={{borderBottomColor: '#a3a3a3', borderBottomWidth: 1}}>
              <View style={styles.post}>
                <View style={styles.dp}>
                  <Image
                    source={require('../../../../Resources/Drawer/place-holder.jpg')}
                    resizeMode="contain"
                    style={{height: 60, width: 60}}
                  />
                </View>
                <View style={styles.postContent}>
                  <View style={styles.postAccount}>
                    <Text style={{fontWeight: '600'}}>Samuel Wekobosya</Text>
                  </View>
                  <View style={styles.postText}>
                    <Text style={{fontWeight: '300'}}>
                      Hey guys, I would like to welcome you to the TheBeacon,
                      Our social App for Sharing stuff Hey guys, I would like to
                      welcome you to the TheBeacon, Our social App for Sharing
                      stuff Hey guys, I would like to welcome you to the
                      TheBeacon, Our social App for Sharing stuff
                    </Text>
                    <Text>Beacon TV: youtube.com/linktovideo</Text>
                    <Text>Read More: campusweekly.herokuapp.com</Text>
                  </View>
                  <View style={styles.postImage}>
                    <Image
                      source={require('../../../../Resources/Drawer/place-holder.jpg')}
                      resizeMode="cover"
                      style={{width: '100%', height: '100%', borderRadius: 5}}
                    />
                  </View>
                  <View style={styles.date}>
                    <Text>14/04/2021 {'\u2022'} Dean's Office</Text>
                  </View>
                </View>
              </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: ,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: '#a3a3a3',
    borderBottomWidth: 1,
  },
  plusIconCtr: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ce03fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postsCtr: {
    backgroundColor: '#e3e3e3',
  },
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 10,
    width: Dimensions.get('window').width * 0.85,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
  },
  dp: {
    paddingTop: 3,
  },
  postContent: {
    paddingHorizontal: 5,
  },
  postText: {
    marginVertical: 5,
  },
  postImage: {
    width: '100%',
    height: 180,
    marginVertical: 5,
  },
  date: {
    marginVertical: 5,
  },
});
export default News;
