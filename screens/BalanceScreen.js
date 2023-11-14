import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ProcessBar from "../component/ProcessBar";
import { useNavigation } from "@react-navigation/native";

const BalanceScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.navigate("BalancePassword");
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <ProcessBar />
    </>
  );
};

export default BalanceScreen;

const styles = StyleSheet.create({});
