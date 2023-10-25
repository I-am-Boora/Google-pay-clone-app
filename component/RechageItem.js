import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../constrait/color";

const RechageItem = ({ name, image }) => {
  const rowWidth = Dimensions.get("window").width;
  return (
    <View style={[styles.container, { width: rowWidth / 4.5 }]}>
      <View style={[styles.bussinessIcon, { backgroundColor: "#b3e5fc" }]}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.bussinessName}>{name}</Text>
    </View>
  );
};

export default RechageItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: scale(22),
    height: verticalScale(22),
    resizeMode: "contain",
  },
  bussinessIcon: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    alignItems: "center",
    justifyContent: "center",
  },
  bussinessName: {
    marginTop: verticalScale(8),
    fontSize: scale(12),
    fontWeight: "400",
    alignSelf: "center",
  },
});
