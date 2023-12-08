import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainBalance = () => {
  const [showProcess, setShowProcess] = useState(true);
  const [money, setMoney] = useState("");
  const { top } = SafeAreaInsetsContext._currentValue;
  const topBar = Math.round(top) + 10;
  const navigation = useNavigation();
  useEffect(() => {
    const id = setTimeout(() => {
      setShowProcess(false);
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  useEffect(() => {
    const getmoney = async () => {
      try {
        const money = await AsyncStorage.getItem("@money");
        setMoney(money);
      } catch (error) {}
    };
    getmoney();
  }, []);

  return showProcess ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={"large"} color={"#42a5f5"} />
    </View>
  ) : (
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
        <Text>₹{money}</Text>
      </View>
    </View>
  );
};

export default MainBalance;

const styles = StyleSheet.create({});
