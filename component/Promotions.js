import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

const Promotions = ({ name, image }) => {
  return (
    <>
      <Text style={styles.title}>Offers and rewards</Text>
      <View style={styles.container}>
        <View style={{}}>
          <Image
            source={require("../assets/images/reward.png")}
            style={styles.bussinessIcon}
          />
          <Text style={styles.bussinessName}>Rewards</Text>
        </View>
        <View style={{}}>
          <Image
            source={require("../assets/images/price-tag.png")}
            style={styles.bussinessIcon}
          />
          <Text style={styles.bussinessName}>Offers</Text>
        </View>
        <View style={{}}>
          <Image
            source={require("../assets/images/reward.png")}
            style={styles.bussinessIcon}
          />
          <Text style={styles.bussinessName}>Rewards</Text>
        </View>
        <View style={{}}>
          <Image
            source={require("../assets/images/temple.png")}
            style={styles.bussinessIcon}
          />
          <Text style={styles.bussinessName}>Festival</Text>
        </View>
      </View>
    </>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    alignItems: "center",

    // marginVertical: verticalScale(10),
  },
  title: {
    fontSize: scale(18),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
    color: "#424242",
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
    fontSize: scale(13),
    alignSelf: "center",
    fontWeight: "400",
  },
});
