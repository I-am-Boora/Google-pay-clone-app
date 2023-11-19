import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";

const IconItem = ({ gridData }) => {
  return (
    <>
      {gridData.map((item, index) => {
        return (
          <View style={styles.container} key={index}>
            <Image source={item.iconName} style={styles.image} />
            <Text style={styles.text}>{item.textName}</Text>
          </View>
        );
      })}
    </>
  );
};

export default IconItem;

const styles = StyleSheet.create({
  container: {
    width: scale(70),
    height: verticalScale(70),
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    width: scale(22),
    height: verticalScale(22),
    resizeMode: "contain",
  },
  text: {
    paddingTop: verticalScale(10),
    textAlign: "center",
    fontWeight: "500",
    color: "#424242",
  },
});
