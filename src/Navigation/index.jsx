import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="CoinDetail" component={CoinDetailedScreen} />
    </Stack.Navigator>
  );
}
