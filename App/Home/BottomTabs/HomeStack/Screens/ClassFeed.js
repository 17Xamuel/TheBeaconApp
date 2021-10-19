import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Post from '../../../../Components/post';
// import posts from '../data/feedData';

const DATA = [
  {
    id: '1',
    user: 'Xamuel',
    post_text: `Hey guys, I would like to welcome you to the TheBeacon, Our socialApp for Sharing stuff Hey guys, I would like to welcome you to the TheBeacon, Our social App for Sharing stuff`,
    posted_by: "Dean's Office",
    date_posted: '2/05/2021',
    post_image: require('../../../../../Resources/Drawer/place-holder.jpg'),
    post_dp: require('../../../../../Resources/Drawer/place-holder.jpg'),
  },
  {
    id: '2',
    user: 'Xamuel',
    post_text: `Hey guys, I would like to welcome you to the TheBeacon, Our socialApp for Sharing stuff Hey guys, I would like to welcome you to the TheBeacon, Our social App for Sharing stuff`,
    posted_by: "Dean's Office",
    date_posted: '2/05/2021',
    post_image: require('../../../../../Resources/Drawer/place-holder.jpg'),
    post_dp: require('../../../../../Resources/Drawer/place-holder.jpg'),
  },
];

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({item}) => <Post post={item} nav={this.props.navigation} />;
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.ctr}>
          <View style={styles.postsCtr}>
            <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
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
export default Feed;
