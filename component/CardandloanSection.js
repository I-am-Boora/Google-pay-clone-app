import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { scale, verticalScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardandloanSection = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>Manage your money</Text>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <AntDesign name="creditcard" size={24} color="#01579b" />
          <Text style={{ paddingLeft: scale(10), fontSize: scale(13) }}>
            Get a credit card
          </Text>
        </View>
        <View style={styles.viewContainer}>
          <MaterialIcons name="card-travel" size={24} color="#01579b" />
          <Text style={{ paddingLeft: scale(10), fontSize: scale(13) }}>
            Loans
          </Text>
        </View>
        <View style={styles.viewContainer}>
          <MaterialCommunityIcons name="gold" size={24} color="#01579b" />
          <Text
            style={{
              paddingLeft: scale(10),
              fontSize: scale(13),
              fontWeight: "400",
            }}
          >
            Gold
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: scale(20),
          marginVertical: verticalScale(30),
          rowGap: scale(10),
        }}
      >
        <View style={styles.balanceContainer}>
          <View style={styles.iconAndText}>
            <MaterialIcons name="speed" size={24} color="#01579b" />
            <Text
              style={{
                paddingLeft: scale(10),
                fontSize: scale(13),
                fontWeight: "500",
                color: "#424242",
              }}
            >
              Check your CIBIL score for free
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.iconAndText}>
            <MaterialCommunityIcons name="history" size={24} color="#01579b" />
            <Text
              style={{
                paddingLeft: scale(10),
                fontSize: scale(13),
                fontWeight: "500",
                color: "#424242",
              }}
            >
              Show transaction history
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <Pressable
          style={styles.balanceContainer}
          onPress={() => navigation.navigate("Balance")}
        >
          <View style={styles.iconAndText}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={24}
              color="#01579b"
            />
            <Text
              style={{
                paddingLeft: scale(10),
                fontSize: scale(13),
                fontWeight: "500",
                color: "#424242",
              }}
            >
              Check bank balance
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </Pressable>
      </View>
    </>
  );
};

export default CardandloanSection;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(18),
    paddingHorizontal: scale(20),
    marginVertical: verticalScale(15),
    color: "#424242",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: scale(20),
    columnGap: verticalScale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  viewContainer: {
    flexDirection: "row",
    borderWidth: scale(1),
    borderRadius: scale(8),
    borderColor: "grey",
    alignItems: "center",
    paddingHorizontal: scale(8),
    paddingVertical: scale(3),
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: verticalScale(15),
  },
  iconAndText: {
    flexDirection: "row",
  },
});
