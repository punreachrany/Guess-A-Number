import { StyleSheet, TextInput } from "react-native";

import React from "react";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
});

export default Input;
