import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

const Invite = () => {
  return (
    <View
      style={{ backgroundColor: "#f0f5fa", paddingVertical: verticalScale(10) }}
    >
      <View style={{ paddingHorizontal: scale(20) }}>
        <Text
          style={{
            fontSize: scale(16),
            fontWeight: "500",
            marginVertical: verticalScale(10),
            color: "#424242",
          }}
        >
          Invite friends to get ₹201
        </Text>
        <Text
          style={{
            fontSize: scale(14),
            fontWeight: "400",
            color: "grey",
          }}
        >
          Invite friends to Google Pay and get ₹201 when your friend sends their
          first payment. They get ₹21
        </Text>
        <Text
          style={{
            fontSize: scale(14),

            marginVertical: verticalScale(10),
          }}
        >
          Copy your code{" "}
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: "500",
              marginVertical: verticalScale(10),
              color: "#424242",
            }}
          >
            b33ai6t
          </Text>
        </Text>
        <View
          style={{
            paddingVertical: verticalScale(5),
            paddingHorizontal: scale(5),
            borderWidth: 1,
            borderRadius: scale(50),
            width: scale(80),
            // height: verticalScale(38),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: scale(15), color: "#01579b", fontWeight: "400" }}
          >
            Invite
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Invite;

const styles = StyleSheet.create({});
