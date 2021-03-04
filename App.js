import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import GameScreen from "./screens/GameScreen";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserName] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserName(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
