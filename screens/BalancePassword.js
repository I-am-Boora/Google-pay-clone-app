import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import { colors } from "../constrait/color";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

const BalancePassword = () => {
  const [pin, setPin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { top } = SafeAreaInsetsContext._currentValue;
  const topBar = Math.round(top) + 10;
  const navigation = useNavigation();

  const login = () => {
    let oldPin = 111213;
    if (oldPin == pin) {
      navigation.navigate("MainBalance");
    } else {
      setPin("");
    }
  };

  return (
    <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <View style={[styles.header, { marginTop: topBar }]}>
        <View>
          <Text style={{ fontSize: scale(13) }}>State Bank of India</Text>
          <Text style={{ fontSize: scale(15), fontWeight: "500" }}>
            XXXX2673
          </Text>
        </View>
        <Image
          source={require("../assets/images/upi-payment-icon.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.subHeading}>
        <Text style={{ fontSize: scale(14) }}>XXXXXX2673</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: scale(12),
            marginTop: verticalScale(10),
            fontWeight: "500",
            marginTop: verticalScale(20),
          }}
        >
          ENTER 6-DIGIT UPI PIN
        </Text>
        <View style={{ flexDirection: "row", marginTop: verticalScale(25) }}>
          <View
            style={{
              width: scale(20),
              height: verticalScale(20),
              borderRadius: scale(10),
              borderWidth: scale(1),
              marginRight: scale(8),
              backgroundColor:
                pin.length == 1 ||
                pin.length == 2 ||
                pin.length == 3 ||
                pin.length == 4 ||
                pin.length == 5 ||
                pin.length == 6
                  ? "black"
                  : "white",
              // backgroundColor: "black",
            }}
          />
          <View
            style={{
              width: scale(20),
              height: verticalScale(20),
              borderRadius: scale(10),
              borderWidth: scale(1),
              marginRight: scale(8),
              backgroundColor:
                pin.length == 2 ||
                pin.length == 3 ||
                pin.length == 4 ||
                pin.length == 5 ||
                pin.length == 6
                  ? "black"
                  : "white",
              // backgroundColor: "black",
            }}
          />
          <View
            style={{
              width: scale(20),
              height: verticalScale(20),
              borderRadius: scale(50),
              borderWidth: scale(1),
              marginRight: scale(8),
              backgroundColor:
                pin.length == 3 ||
                pin.length == 4 ||
                pin.length == 5 ||
                pin.length == 6
                  ? "black"
                  : "white",
              // backgroundColor: "black",
            }}
          />
          <View
            style={{
              width: scale(20),
              height: verticalScale(20),
              borderRadius: scale(10),
              borderWidth: scale(1),
              marginRight: scale(8),
              backgroundColor:
                pin.length == 4 || pin.length == 5 || pin.length == 6
                  ? "black"
                  : "white",
              // backgroundColor: "black",
            }}
          />
          <View
            style={{
              width: scale(20),
              height: verticalScale(20),
              borderRadius: scale(10),
              borderWidth: scale(1),
              marginRight: scale(8),
              backgroundColor:
                pin.length == 5 || pin.length == 6 ? "black" : "white",
              // backgroundColor: "black",
            }}
          />
          <View
            style={{
              width: scale(20),
              height: verticalScale(20),
              borderRadius: scale(10),
              borderWidth: scale(1),
              marginRight: scale(8),
              backgroundColor: pin.length == 6 ? "black" : "white",
              // backgroundColor: "black",
            }}
          />
        </View>

        <Text
          style={{
            paddingHorizontal: scale(15),
            textAlign: "center",
            marginTop: verticalScale(80),
            fontWeight: "500",
            color: "#424242",
          }}
        >
          UPI PIN will keep your account secure from unauthorized access. Do not
          share this PIN with anyone.
        </Text>
      </View>
      <View style={{ rowGap: scale(10), paddingVertical: verticalScale(10) }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",

            paddingHorizontal: scale(10),
          }}
        >
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "1");
              }
            }}
          >
            <Text style={styles.keypadText}>1</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "2");
              }
            }}
          >
            <Text style={styles.keypadText}>2</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "3");
              }
            }}
          >
            <Text style={styles.keypadText}>3</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",

            paddingHorizontal: scale(10),
          }}
        >
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "4");
              }
            }}
          >
            <Text style={styles.keypadText}>4</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "5");
              }
            }}
          >
            <Text style={styles.keypadText}>5</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "6");
              }
            }}
          >
            <Text style={styles.keypadText}>6</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",

            paddingHorizontal: scale(10),
          }}
        >
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "7");
              }
            }}
          >
            <Text style={styles.keypadText}>7</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "8");
              }
            }}
          >
            <Text style={styles.keypadText}>8</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "9");
              }
            }}
          >
            <Text style={styles.keypadText}>9</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: scale(10),
          }}
        >
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              const newPin = pin.slice(0, -1);
              setPin(newPin);
            }}
          >
            <FontAwesome5 name="backspace" size={30} color="#1a237e" />
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              if (pin.length < 6) {
                setPin(pin + "0");
              }
            }}
          >
            <Text style={styles.keypadText}>0</Text>
          </Pressable>
          <Pressable style={styles.buttonContainer} onPress={() => login()}>
            <AntDesign name="checkcircle" size={30} color="#1a237e" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BalancePassword;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    backgroundColor: "white",
    paddingVertical: verticalScale(8),
    alignItems: "center",
  },
  image: {
    height: verticalScale(24),
    width: scale(100),
    resizeMode: "contain",
  },
  subHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    marginTop: verticalScale(15),
    alignItems: "center",
  },
  keypadText: {
    color: "#1a237e",
    fontSize: scale(30),
    // fontWeight: "500",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
