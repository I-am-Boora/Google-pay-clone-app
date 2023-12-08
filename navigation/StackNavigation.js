import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BalanceScreen from "../screens/BalanceScreen";
import BalancePassword from "../screens/BalancePassword";
import MainBalance from "../screens/MainBalance";
import PasswordInputScreen from "../component/PasswordInputScreen";
import InputBalance from "../screens/InputBalance";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="PasswordScreen"
        component={PasswordInputScreen}
        options={{ headerShown: false }}
      /> */}
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
      <Stack.Screen
        name="InputBalance"
        component={InputBalance}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
