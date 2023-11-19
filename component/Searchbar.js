import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import IconGrid from "./IconGrid";

const Searchbar = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/images/MySep2.jpg")}
        style={[styles.backgroundImage, { width: width, height: height / 3.5 }]}
      >
        <View style={styles.headerContainer}>
          <View style={styles.searchContainer}>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={{ paddingHorizontal: scale(10) }}
            />
            <TextInput
              placeholder="Pay using mobile number"
              style={styles.inputText}
            />
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require("../assets/images/userprofile.jpeg")}
              style={styles.image}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  backgroundImage: { marginTop: verticalScale(10) },
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: scale(10),
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    borderWidth: scale(1),
    alignItems: "center",
    borderRadius: scale(22),
    height: verticalScale(40),
    flex: 1,
    marginRight: scale(5),
    borderColor: "grey",
  },
  inputText: { fontSize: scale(14) },
  profileContainer: {
    width: scale(30),
    height: verticalScale(30),
    borderRadius: scale(15),
  },
  image: {
    // flex: 1,
    width: scale(30),
    height: verticalScale(30),
    borderRadius: scale(30),
    resizeMode: "cover",
  },
});
