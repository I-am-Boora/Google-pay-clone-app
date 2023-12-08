import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

const ProcessBar = () => {
  const { top } = SafeAreaInsetsContext._currentValue;
  const topBar = Math.round(top) + 10;
  return (
    <>
      <View>
        <Text
          style={{
            marginTop: topBar,
            fontSize: scale(18),
            paddingHorizontal: scale(20),
          }}
        >
          Check Balance
        </Text>
        <View
          style={{
            height: scale(1),
            backgroundColor: "grey",
            marginTop: scale(10),
          }}
        ></View>
        <Text
          style={{
            fontSize: scale(12),
            color: "grey",
            paddingHorizontal: scale(20),
            marginTop: verticalScale(5),
          }}
        >
          Getting information please wait
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#42a5f5"} />
      </View>
    </>
  );
};

export default ProcessBar;

const styles = StyleSheet.create({});
