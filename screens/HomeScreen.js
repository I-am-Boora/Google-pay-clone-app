import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Searchbar from "../component/Searchbar";
import IconGrid from "../component/IconGrid";
import People from "../component/People";
import Bussiness from "../component/Bussiness";
import BillRechagreRow from "../component/BillRechagreRow";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <Searchbar />
        <IconGrid />
        <People />
        <Bussiness />
        <BillRechagreRow />
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
