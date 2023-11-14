import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Entypo } from "@expo/vector-icons";
const People = () => {
  const [user, setUser] = useState([]);
  const [isClick, setIsClick] = useState(true);
  const width = Dimensions.get("window").width;
  const handleClick = () => {
    setIsClick(!isClick);
    console.log("clicked");
  };

  console.log("hello");
  return (
    <View>
      <Text style={styles.title}>People</Text>
      <View style={styles.container}>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>
        <View style={{ width: width / 5 }}>
          <View style={styles.bussinessIcon}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.bussinessIcon}
            />
            <Text style={styles.bussinessName} numberOfLines={1}>
              janny
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Pressable
            onpress={handleClick}
            style={[
              styles.bussinessIcon,
              {
                borderWidth: scale(1),
                borderColor: "grey",
                borderRadius: scale(25),
              },
            ]}
          >
            {isClick ? (
              <Entypo name="chevron-thin-up" size={24} color="#01579b" />
            ) : (
              <Entypo name="chevron-thin-down" size={24} color="#01579b" />
            )}
          </Pressable>
          <Text style={{ fontSize: scale(13), paddingTop: scale(5) }}>
            More
          </Text>
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
    rowGap: scale(40),
    columnGap: scale(10),
    paddingHorizontal: scale(20),
    // justifyContent: "center",
    marginVertical: verticalScale(30),
    alignItems: "center",
  },
  title: {
    fontSize: scale(20),
    paddingHorizontal: scale(20),
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
