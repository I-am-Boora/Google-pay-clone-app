import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Searchbar from "../component/Searchbar";
import IconGrid from "../component/IconGrid";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Searchbar />
        <IconGrid />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "contain",
  },
});
