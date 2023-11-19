import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MainBalance = () => {
  const { top } = SafeAreaInsetsContext._currentValue;
  const topBar = Math.round(top) + 10;
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: topBar, paddingHorizontal: scale(20) }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          //   paddingHorizontal: scale(10),
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </View>
      <Text style={{ fontSize: scale(20), marginTop: verticalScale(15) }}>
        Check Balance
      </Text>
      <View style={{ marginVertical: verticalScale(15) }}>
        <Text style={{ fontSize: scale(14), fontWeight: "500" }}>
          Savings account
        </Text>
        <Text>State Bank of India 2673</Text>
      </View>
      <View>
        <Text style={{ fontSize: scale(14), fontWeight: "500" }}>
          Account balance
        </Text>
        <Text>₹80,455</Text>
      </View>
    </View>
  );
};

export default MainBalance;

const styles = StyleSheet.create({});
