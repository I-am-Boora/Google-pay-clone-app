import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const Upi = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.upiContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>Activate UPI Lite</Text>
      </View>
      <Pressable
        style={styles.rightContainer}
        onPress={() => navigation.navigate("InputBalance")}
      >
        <Text style={styles.text}>UPI ID: sonuboora@oksbi</Text>
      </Pressable>
    </View>
  );
};

export default Upi;

const styles = StyleSheet.create({
  upiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: verticalScale(20),
  },
  leftContainer: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    borderWidth: scale(1),
    borderColor: "grey",
    borderStyle: "dashed",
    borderRadius: scale(100),
    marginRight: scale(8),
  },
  rightContainer: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    backgroundColor: "#e3f2fd",
    borderRadius: scale(100),
  },
  text: {
    color: "#424242",
  },
});
