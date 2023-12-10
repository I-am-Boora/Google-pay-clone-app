import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Contactlist = ({ apidata }) => {
  const navigation = useNavigation();
  if (!apidata || !apidata.results) {
    // Return a loading state or an empty view if apidata or results are null
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#42a5f5"} />
      </View>
    );
  }
  const renderItem = ({ item, index }) => (
    <Pressable
      key={index}
      style={styles.listContainer}
      onPress={() => {
        navigation.navigate("ContactDetail", {
          name: item?.name?.first,
          image: item?.picture?.large,
          number: item?.cell,
        });
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={
            item?.picture?.large
              ? { uri: item.picture.large }
              : require("../assets/images/userprofile.jpeg")
          }
          style={styles.image}
        />
      </View>
      <View style={styles.userTextContainer}>
        <Text style={{ fontSize: scale(16), fontWeight: "500" }}>
          {item?.name?.first}
        </Text>
        <Text style={{ fontSize: scale(14) }}>{item?.cell}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={apidata.results}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderBottomWidth: 0,
          borderBottomColor: "#f2f2f2",
          paddingHorizontal: scale(0),
        }}
      />
    </View>
  );
};

export default Contactlist;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },
  imageContainer: {
    width: scale(40),
    height: verticalScale(40),
    resizeMode: "cover",
    borderRadius: scale(20),
  },
  image: {
    width: scale(40),
    height: verticalScale(40),
    resizeMode: "cover",
    borderRadius: scale(20),
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userTextContainer: {
    paddingLeft: scale(10),
  },
});
