import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailedScreen} />
    </Stack.Navigator>
  );
}
