import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Entypo } from "@expo/vector-icons";
const People = () => {
  const [user, setUser] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const width = Dimensions.get("window").width;
  const handleClick = () => {
    setIsClick(!isClick);
    console.log("clicked");
  };

  const data = [
    {
      name: "Kuleep",
      color: "#7b463b",
    },
    {
      name: "Sanjay",
      color: "#456789",
    },
    {
      name: "Mohit",
      color: "#166461",
    },
    {
      name: "Suresh",
      color: "#990066",
    },
    {
      name: "Ajay",
      color: "#a59344",
    },
    {
      name: "Santosh",
      color: "#4c4f56",
    },
    {
      name: "Malik",
      color: "#3d1c02",
    },
  ];
  return (
    <View>
      <Text style={styles.title}>People</Text>
      <View style={styles.container}>
        {data.map((item, index) => {
          return (
            <>
              <View
                style={{
                  width: width / 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={index}
              >
                <View
                  style={[
                    styles.bussinessIcon,
                    { backgroundColor: item.color },
                  ]}
                >
                  <Text style={{ fontSize: scale(25), color: "#f2f2f2" }}>
                    {item?.name.slice(0, 1)}
                  </Text>
                </View>
                <Text style={{ marginTop: verticalScale(5) }}>{item.name}</Text>
              </View>
            </>
          );
        })}

        <View style={{ alignItems: "center", marginLeft: scale(10) }}>
          <Pressable
            onpress={handleClick}
            style={[
              styles.bussinessIcon,
              {
                width: scale(50),
                height: scale(50),
                borderRadius: scale(50),
                borderWidth: scale(1),
                borderColor: "grey",
              },
            ]}
          >
            {isClick ? (
              <Entypo name="chevron-thin-up" size={24} color="#01579b" />
            ) : (
              <Entypo name="chevron-thin-down" size={24} color="#01579b" />
            )}
          </Pressable>
          <Text style={{ fontSize: scale(13), paddingTop: scale(5) }}>
            More
          </Text>
        </View>
      </View>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: scale(20),
    columnGap: scale(10),
    paddingHorizontal: scale(20),
    // justifyContent: "center",
    marginVertical: verticalScale(20),
    alignItems: "center",
  },
  title: {
    fontSize: scale(18),
    paddingHorizontal: scale(20),
    color: "#424242",
  },
  bussinessIcon: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    alignItems: "center",
    justifyContent: "center",
  },
  bussinessName: {
    marginTop: verticalScale(8),
    fontSize: scale(13),
  },
});
