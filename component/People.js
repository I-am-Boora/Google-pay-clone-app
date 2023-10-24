import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { axios } from "axios";
import SinglePerson from "../component/SinglePerson";
import { Entypo } from "@expo/vector-icons";
const People = () => {
  const [user, setUser] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const peopleData = [{}];

  return (
    <View>
      <Text style={styles.title}>People</Text>
      <View style={styles.container}>
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
        />
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
        />
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
        />
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
        />
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
        />
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
        />
        <SinglePerson
          name="Janny "
          image={require("../assets/images/userprofile.jpeg")}
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

export default People;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: scale(10),
    rowGap: scale(40),
    paddingHorizontal: scale(10),
    justifyContent: "center",
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
  title: {
    fontSize: scale(20),
    paddingHorizontal: scale(10),
    // fontWeight: "500",
  },
});
