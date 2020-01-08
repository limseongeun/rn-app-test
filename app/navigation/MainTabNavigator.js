import React from "react";
import { Platform, StatusBar } from "react-native";
// createStackNavigator, createBottomTabNavigator 버전에 따른 분리!!
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import TabScreen from "../screens/TabScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "홈",
  tabBarOptions: {
    activeTintColor: "#435cff",
    inactiveTintColor: "#636363",

    style: {
      borderTopWidth: 0
    }
  },
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"home"} />
};

HomeStack.path = "";

const TabStack = createStackNavigator(
  {
    Tab: TabScreen
  },
  config
);

TabStack.navigationOptions = {
  tabBarLabel: "탭",
  tabBarOptions: {
    activeTintColor: "#435cff",
    inactiveTintColor: "#636363",
    style: {
      borderTopWidth: 0
    }
  },
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"developer-board"} />
};

TabStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TabStack
});

tabNavigator.path = "";

export default tabNavigator;