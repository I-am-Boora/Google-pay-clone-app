import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

const Promotions = ({ name, image }) => {
  return (
    <View
      style={{ width: scale(70), height: scale(70), borderRadius: scale(35) }}
    >
      <Image
        source={image}
        style={{
          width: scale(70),
          height: scale(70),
          borderRadius: scale(35),
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default Promotions;

const styles = StyleSheet.create({});
