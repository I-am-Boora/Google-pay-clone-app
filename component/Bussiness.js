import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../constrait/color";
import SinglePerson from "./SinglePerson";
import { Entypo } from "@expo/vector-icons";
import Promotions from "./Promotions";
const Bussiness = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bussiness</Text>
        <View style={styles.rightHeaderContainer}>
          <SimpleLineIcons
            name="handbag"
            size={16}
            color="black"
            style={{ paddingHorizontal: scale(5) }}
          />
          <Text style={styles.text}>Explore</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.bussinessIcon}>
          <Image
            source={require("../assets/images/Vodafone_logo_PNG6.png")}
            style={styles.bussinessIcon}
          />
          <Text style={styles.bussinessName} numberOfLines={1}>
            vi
          </Text>
        </View>
        <View style={styles.bussinessIcon}>
          <Image
            source={require("../assets/images/Jio_logo_PNG4.png")}
            style={styles.bussinessIcon}
          />
          <Text style={styles.bussinessName} numberOfLines={1}>
            Jio postpaid
          </Text>
        </View>
        <View style={styles.bussinessIcon}>
          <Image
            source={require("../assets/images/Swiggy_logo_PNG2.png")}
            style={[styles.bussinessIcon, { borderWidth: scale(1) }]}
          />
          <Text style={styles.bussinessName} numberOfLines={1}>
            Sweggy
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            onpress={() => setIsClick(!isClick)}
            style={[
              styles.bussinessIcon,
              { borderWidth: scale(1), borderColor: "grey" },
            ]}
          >
            {isClick ? (
              <Entypo name="chevron-thin-up" size={24} color="#01579b" />
            ) : (
              <Entypo name="chevron-thin-down" size={24} color="#01579b" />
            )}
          </Pressable>
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: "400",
              marginTop: scale(8),
            }}
          >
            More
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Bussiness;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: scale(18),
    color: "#424242",
    // marginVertical: verticalScale(10),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },
  rightHeaderContainer: {
    flexDirection: "row",
    backgroundColor: "#b3e5fc",
    padding: moderateScale(8),
    borderRadius: scale(20),
    alignItems: "center",
  },
  text: { fontSize: scale(13), fontWeight: "400" },

  subContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: scale(30),
    paddingHorizontal: scale(10),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(20),
  },
  iconContainer: {
    borderWidth: scale(2),
    width: scale(70),
    height: verticalScale(70),
    borderRadius: scale(35),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
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
  },
});
