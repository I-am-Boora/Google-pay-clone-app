import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconItem from "./IconItem";
import { scale, verticalScale } from "react-native-size-matters";
const IconGrid = () => {
  const gridData = [
    {
      textName: "Scan any OR code",
      iconName: require("../assets/images/qr-code.png"),
    },
    {
      textName: "Pay contact",
      iconName: require("../assets/images/contact.png"),
    },
    {
      textName: "Pay phone number",
      iconName: require("../assets/images/smartphone.png"),
    },
    { textName: "Bank", iconName: require("../assets/images/bank.png") },
    {
      textName: "UPI ID",
      iconName: require("../assets/images/at.png"),
    },
    {
      textName: "Self transfer",
      iconName: require("../assets/images/self.png"),
    },

    {
      textName: "Pay bills",
      iconName: require("../assets/images/invoice.png"),
    },
    {
      textName: "Mobile recharge",
      iconName: require("../assets/images/mobile.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <IconItem gridData={gridData} />
    </View>
  );
};

export default IconGrid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: scale(10),
    rowGap: scale(25),
    paddingHorizontal: scale(10),
    justifyContent: "center",
    paddingTop: verticalScale(10),
  },
});
