import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const InputBalance = () => {
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState(true);
  // const usernameInputRef = useRef(null);

  // useEffect(() => {
  //   // Set focus on the username input box when the component mounts
  //   if (usernameInputRef.current) {
  //     usernameInputRef.current.focus();
  //   }
  // }, []);
  const showToast = () => {
    Toast.show({
      type: message ? "success" : "error",
      text1: message ? "Balance added" : "Failed",
      text2: message
        ? "Balance added to your account successfully."
        : "There some server issue",
      visibilityTime: 6000,
    });
  };

  const handleBalance = async () => {
    try {
      if (!balance) {
        Alert.alert("Please enter some balance");
      } else {
        await AsyncStorage.setItem("@money", balance);
        showToast();
        setBalance("");
        Keyboard.dismiss();
      }
    } catch (error) {
      setMessage(false);
      showToast();
      setBalance("");
    }
  };

  return (
    <View style={{ paddingHorizontal: scale(20) }}>
      <Text
        style={{
          fontSize: scale(20),
          alignSelf: "center",
          marginTop: verticalScale(50),
        }}
      >
        Fill your account with money
      </Text>
      <TextInput
        placeholder="Enter balance"
        style={styles.input}
        keyboardType="phone-pad"
        value={balance}
        autoFocus={true}
        onChangeText={(text) => setBalance(text)}
        // useRef={usernameInputRef}
      />
      <Pressable style={styles.btn} onPress={handleBalance}>
        <Text style={{ fontSize: scale(16) }}>Add Balance</Text>
      </Pressable>
    </View>
  );
};

export default InputBalance;

const styles = StyleSheet.create({
  input: {
    borderWidth: scale(1),
    padding: moderateScale(10),
    paddingHorizontal: scale(20),
    fontSize: scale(18),
    borderColor: "#42a5f5",
    marginTop: verticalScale(20),
    borderRadius: scale(15),
  },
  btn: {
    borderRadius: scale(100),
    padding: scale(10),
    height: verticalScale(44),
    backgroundColor: "#bbdefb",
    width: scale(140),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
});
