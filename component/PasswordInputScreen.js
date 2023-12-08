import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const PasswordInputScreen = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleDigitPress = (digit) => {
    // Append the pressed digit to the current password
    setPassword(password + digit);
  };

  const handleBackspacePress = () => {
    // Remove the last digit from the password
    setPassword(password.slice(0, -1));
  };

  const handleLoginPress = () => {
    // Perform authentication logic here with the entered password
    console.log("Entered password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="_ _ _ _ _ _"
        secureTextEntry={true}
        value={password}
        editable={false}
      />
      <View style={styles.dialPad}>
        <View style={styles.row}>
          {[1, 2, 3].map((digit) => (
            <TouchableOpacity
              key={digit}
              style={styles.digitButton}
              onPress={() => handleDigitPress(`${digit}`)}
            >
              <Text style={styles.digitButtonText}>{digit}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map((digit) => (
            <TouchableOpacity
              key={digit}
              style={styles.digitButton}
              onPress={() => handleDigitPress(`${digit}`)}
            >
              <Text style={styles.digitButtonText}>{digit}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[7, 8, 9].map((digit) => (
            <TouchableOpacity
              key={digit}
              style={styles.digitButton}
              onPress={() => handleDigitPress(`${digit}`)}
            >
              <Text style={styles.digitButtonText}>{digit}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.digitButton}
            onPress={handleBackspacePress}
          >
            <Text style={styles.digitButtonText}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.digitButton}
            onPress={() => handleDigitPress("0")}
          >
            <Text style={styles.digitButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.digitButton}
            onPress={handleLoginPress}
          >
            <Text style={styles.digitButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff", // Set background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    // height: 40,
    // borderColor: "gray",
    // borderWidth: 1,
    // borderRadius: 8,
    paddingHorizontal: 16,
    // marginBottom: 16,
    marginTop: 20,
    width: "100%",
    fontSize: 30,
    textAlign: "center",
  },
  dialPad: {
    width: "100%",
    flexDirection: "column",
    marginTop: 100,
    // flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  digitButton: {
    backgroundColor: "#f2f2f2", // Adjust the background color
    // padding: 20,
    width: 80,
    height: 80,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  digitButtonText: {
    color: "#333", // Adjust the text color
    fontSize: 24,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PasswordInputScreen;
