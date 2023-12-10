import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import axios from "axios";
import Contactlist from "../component/Contactlist";

const PayContactScreen = () => {
  const [apidata, setApidata] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?results=100"
      );
      setApidata(response.data);
    };
    getdata();
  }, []);

  return (
    <View style={styles.Container}>
      <Text
        style={{
          fontSize: scale(20),
          marginTop: verticalScale(40),
          paddingHorizontal: scale(20),
        }}
      >
        All peope on UPI
      </Text>
      <Contactlist apidata={apidata} />
    </View>
  );
};

export default PayContactScreen;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: scale(0),
    marginBottom: verticalScale(10),
    backgroundColor: "#f2f2f2",
  },
});
