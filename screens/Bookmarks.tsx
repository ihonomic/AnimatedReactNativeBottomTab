import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";

const Bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmarks</Text>
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },
});
