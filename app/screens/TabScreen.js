import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

export default class TabScreen extends Component {

  render() {
    return (
      <View style={styles.contentContainer}>
        <Text>탭화면 페이지!!!</Text>
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
