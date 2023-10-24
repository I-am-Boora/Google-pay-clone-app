import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../constrait/color";
import RechageItem from "./RechageItem";

const BillRechagreRow = () => {
  return (
    <View>
      <Text style={styles.title}>Bills, racharges and more</Text>
      <View style={styles.container}>
        <View style={styles.billContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/DHBVN_Logo.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: scale(18) }}>Surender</Text>
            <Text style={{ fontSize: scale(14), color: "red" }}>
              Bill due in 3 days
            </Text>
          </View>
        </View>

        <View style={styles.paymentContainer}>
          <Text style={styles.payment}>₹1,990</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: scale(15),
          paddingLeft: scale(10),
          fontWeight: "500",
          marginBottom: verticalScale(10),
        }}
      >
        Try adding these
      </Text>
      <View style={styles.iconContainer}>
        <RechageItem
          name="Mobile recharge"
          image={require("../assets/images/mobile.png")}
        />
        <RechageItem
          name="Mobile recharge"
          image={require("../assets/images/mobile.png")}
        />
        <RechageItem
          name="Mobile recharge"
          image={require("../assets/images/mobile.png")}
        />
        <RechageItem
          name="Mobile recharge"
          image={require("../assets/images/mobile.png")}
        />
      </View>
    </View>
  );
};

export default BillRechagreRow;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(20),
    paddingHorizontal: scale(10),
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    alignItems: "center",
    marginVertical: verticalScale(10),
  },
  billContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: scale(1),
    borderColor: "gray",
    borderRadius: scale(30),
  },
  image: {
    width: scale(60),
    height: verticalScale(60),
    borderRadius: scale(30),
    resizeMode: "contain",
  },
  nameContainer: {
    paddingLeft: scale(10),
  },
  paymentContainer: {
    borderWidth: scale(1),
    padding: moderateScale(10),
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
  },
  payment: {
    fontSize: scale(14),
    fontWeight: "500",
    color: "#01579b",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: scale(20),
    alignItems: "center",
    marginVertical: verticalScale(10),
  },
});
