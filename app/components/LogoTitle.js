import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class LogoTitle extends Component {
  render() {
    return (
      <View style={styles.headerBar}>
        <Image
          source={require("../assets/images/robot-prod.png")}
          style={{ width: wp("10%"), height: wp("10%") }}
        />
        <Text style={styles.headerName}>타이틀</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: wp("3.975%"),
    paddingRight: wp("3.975%"),
    backgroundColor: '#000'
  },
  headerName: {
    flex: 1,
    paddingRight: wp("13.250%"),
    paddingTop: 10,
    fontSize: wp("4.770%"),
    color: "#fff",
    textAlign: "center"
  }
});
