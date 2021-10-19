import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function CourseNotes(props) {
  return (
    <View>
      <View style={styles.courseNameCtr}>
        <Text style={styles.courseName}>Operating Systems</Text>
      </View>
      <View>
        <Note />
        <Note />
      </View>
    </View>
  );
}

export function Note(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.fileCtr}>
        <View style={styles.fileIcon}>
          <Image
            source={require('../../Resources/Drawer/place-holder.jpg')}
            resizeMode="cover"
            style={{width: 45, height: 45, borderRadius: 5}}
          />
        </View>
        <View style={styles.fileNameCtr}>
          <View style={styles.fileName}>
            <Text style={{fontSize: 17}}>Lecture One Slides.pptx</Text>
            <Text style={{fontSize: 14}}>Size: 144px</Text>
          </View>
          <View style={styles.fileDownloadedIcon}>
            <Feather name="user" size={20} color="green" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseName: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 15,
  },
  fileCtr: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
    marginHorizontal: 15,
    height: 55,
  },
  fileIcon: {
    marginTop: 5,
    flex: 1,
  },
  fileName: {
    justifyContent: 'space-between',
  },
  fileNameCtr: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  fileDownloadedIcon: {
    backgroundColor: '#0dd940',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
});
