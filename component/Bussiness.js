import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../constrait/color";
import SinglePerson from "./SinglePerson";
import { Entypo } from "@expo/vector-icons";
const Bussiness = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bussiness</Text>
        <View style={styles.rightHeaderContainer}>
          <SimpleLineIcons
            name="handbag"
            size={24}
            color="black"
            style={{ paddingHorizontal: scale(5) }}
          />
          <Text style={styles.text}>Explore</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <SinglePerson
          name="Vi prepaid"
          image={require("../assets/images/Vodafone_logo_PNG6.png")}
        />
        <SinglePerson
          name="Jio postpaid"
          image={require("../assets/images/Jio_logo_PNG4.png")}
        />
        <SinglePerson
          name="Sweggy"
          image={require("../assets/images/Swiggy_logo_PNG2.png")}
        />

        <View style={{ alignItems: "center" }}>
          <Pressable
            onpress={() => setIsClick(!isClick)}
            style={styles.iconContainer}
          >
            {isClick ? (
              <Entypo name="chevron-thin-up" size={24} color="#01579b" />
            ) : (
              <Entypo name="chevron-thin-down" size={24} color="#01579b" />
            )}
          </Pressable>
          <Text style={{ fontSize: scale(15), fontWeight: "500" }}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Bussiness;

const styles = StyleSheet.create({
  container: { paddingHorizontal: scale(10) },
  title: {
    fontSize: scale(20),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(20),
  },
  rightHeaderContainer: {
    flexDirection: "row",
    backgroundColor: "#b3e5fc",
    padding: moderateScale(8),
    borderRadius: scale(20),
  },
  text: { fontSize: scale(16), fontWeight: "500" },

  subContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: scale(10),
    rowGap: scale(40),
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
});
