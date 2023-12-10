import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactDetail = ({ route }) => {
  const { name, number, image } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 40 }}>{name}</Text>
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({});
