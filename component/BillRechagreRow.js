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
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/DHBVN_Logo.jpg")}
              style={styles.bussinessIcon}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: scale(16) }}>Surender</Text>
            <Text style={{ fontSize: scale(12), color: "red" }}>
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
          paddingHorizontal: scale(20),
          fontWeight: "500",
          marginVertical: verticalScale(10),
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
          name="DTH / Cable TV"
          image={require("../assets/images/tv.png")}
        />
        <RechageItem
          name="Electricity"
          image={require("../assets/images/lightbulb.png")}
        />
        <RechageItem
          name="FasTag recharge"
          image={require("../assets/images/toll-road.png")}
        />
      </View>
    </View>
  );
};

export default BillRechagreRow;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(20),
    paddingHorizontal: scale(20),
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

  nameContainer: {
    paddingLeft: scale(10),
  },
  paymentContainer: {
    borderWidth: scale(1),
    padding: moderateScale(10),
    borderRadius: scale(30),
    borderColor: "grey",
    paddingHorizontal: scale(20),
  },
  payment: {
    fontSize: scale(13),
    fontWeight: "500",
    color: "#01579b",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  bussinessIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: scale(1),
    borderRadius: scale(20),
    borderColor: "grey",
    resizeMode: "contain",
  },
});
