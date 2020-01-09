import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

import LogoTilte from '../components/LogoTitle';
import TabBarIcon from "../components/TabBarIcon";

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.contentContainer}>
        {/* 헤더 */}
        <View style={styles.header}>
          <Text>헤더</Text>

          {/* 정의한 컴포넌트 */}
          <LogoTilte /> 
          
        </View>

        {/* 컨텐츠 */}
        <View style={styles.content}>
          <Text>리액트 네이티브 Expo 테스트 해보기!!</Text>
        </View>

        {/* 푸터 */}
        <View style={styles.footer}>
          <Text>풋터</Text>
          <TabBarIcon name={"home"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: 'yellow'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: 'yellowgreen'
  },
});
