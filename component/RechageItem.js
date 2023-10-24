import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../constrait/color";

const RechageItem = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default RechageItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(80),
  },
  subContainer: {
    backgroundColor: "#81d4fa",
    width: scale(50),
    height: verticalScale(50),
    borderRadius: scale(25),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: scale(24),
    height: verticalScale(24),
    resizeMode: "contain",
  },
  text: {
    fontSize: scale(15),
    fontWeight: "500",
    alignSelf: "center",
  },
});
