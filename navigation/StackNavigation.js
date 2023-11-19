import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BalanceScreen from "../screens/BalanceScreen";
import BalancePassword from "../screens/BalancePassword";
import MainBalance from "../screens/MainBalance";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Balance"
        component={BalanceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BalancePassword"
        component={BalancePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainBalance"
        component={MainBalance}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
