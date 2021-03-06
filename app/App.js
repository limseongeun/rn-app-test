import React, { useState } from "react";
import { StyleSheet, Text, View, Platform, StatusBar, } from 'react-native';

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.loginStatusBar}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#2842aa"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        </View>

        <HomeScreen />
        
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginStatusBar: {
    backgroundColor: "#2842aa",
    height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight
  }
});