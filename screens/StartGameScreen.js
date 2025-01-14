import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [currentNumber, setCurrentNumber] = useState();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        value={currentNumber}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none" // not important here
      />
      {/* Buttons are here */}
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset </PrimaryButton>

        <PrimaryButton>Confirm </PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    borderRadius: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
