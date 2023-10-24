import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

const SinglePerson = ({ name, image }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default SinglePerson;

const styles = StyleSheet.create({
  imageContainer: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: scale(35),
    flex: 1,
  },
  image: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: scale(35),
    resizeMode: "cover",
    borderWidth: scale(1),
    borderColor: "grey",
  },

  text: {
    fontSize: scale(15),
    fontWeight: "500",
    marginVertical: verticalScale(5),
    color: "grey",
    alignSelf: "center",
  },
});
