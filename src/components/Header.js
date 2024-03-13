import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={style.container}>
      <Text style={style.text}>MY FAVORITE BOOKS</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,

    flex: 0.1,
    backgroundColor: "#CCF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default Header;
