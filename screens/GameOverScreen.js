import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This game is over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
