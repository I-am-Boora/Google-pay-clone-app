import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Searchbar from "../component/Searchbar";
import IconGrid from "../component/IconGrid";
import People from "../component/People";
import Bussiness from "../component/Bussiness";
import BillRechagreRow from "../component/BillRechagreRow";
import Promotions from "../component/Promotions";
import { scale, verticalScale } from "react-native-size-matters";
import CardandloanSection from "../component/CardandloanSection";
import Invite from "../component/Invite";
import Upi from "../component/Upi";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <Searchbar />
        <IconGrid />
        <Upi />
        <People />
        <Bussiness />
        <BillRechagreRow />
        <Promotions />
        <CardandloanSection />
        <Invite />
        <Text
          style={{
            marginTop: verticalScale(25),
            textAlign: "center",
            marginBottom: verticalScale(10),
          }}
        >
          Showing bussiness based on your location - Learn more
        </Text>
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
