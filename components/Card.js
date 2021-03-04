import { StyleSheet, View } from "react-native";

import React from "react";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowRadius: 5,
    backgroundColor: "white",
    elevation: 5,
  },
});

export default Card;
