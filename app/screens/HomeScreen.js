import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.contentContainer}>
        <Text>리액트 네이티브 Expo 테스트 해보기!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
