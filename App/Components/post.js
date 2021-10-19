import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function Post({ post, nav }) {
  return (
    <TouchableWithoutFeedback
      style={{ borderBottomColor: "#a3a3a3", borderBottomWidth: 1 }}
      onPress={() => {
        nav.navigate("FeedDetails", { id: post.id });
      }}
    >
      <View style={styles.post}>
        <View style={styles.dp}>
          <Image
            source={post.post_dp}
            resizeMode="contain"
            style={{ height: 60, width: 60 }}
          />
        </View>
        <View style={styles.postContent}>
          <View style={styles.postAccount}>
            <Text style={{ fontWeight: "600" }}>{post.user}</Text>
          </View>
          <View style={styles.postText}>
            <Text style={{ fontWeight: "300" }}>{post.post_text}</Text>
            <Text>Beacon TV: youtube.com/linktovideo</Text>
            <Text>Read More: campusweekly.herokuapp.com</Text>
          </View>
          <View style={styles.postImage}>
            <Image
              source={post.post_image}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
            />
          </View>
          <View style={styles.date}>
            <Text>
              {post.date_posted} {"\u2022"} {post.posted_by}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
    width: Dimensions.get("window").width * 0.85,
    paddingHorizontal: Dimensions.get("window").width * 0.05,
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
    width: "100%",
    height: 180,
    marginVertical: 5,
  },
  date: {
    marginVertical: 5,
  },
});
