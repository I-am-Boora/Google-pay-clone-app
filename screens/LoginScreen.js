import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from "react-native";

const InputField = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    placeholderTextColor="#95a5a6"
  />
);

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    opacity: fadeAnim,
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0],
        }),
      },
    ],
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", { username, password });
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {/* <Image
        source={require("./path/to/your/image.png")}
        style={styles.logo}
        resizeMode="contain"
      /> */}

      <Text style={styles.title}>Welcome Back!</Text>

      <InputField
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <InputField
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <CustomButton title="Login" onPress={handleLogin} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  //   logo: {
  //     width: 150,
  //     height: 150,
  //     marginBottom: 20,
  //   },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#ecf0f1",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#2c3e50",
  },
  button: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
