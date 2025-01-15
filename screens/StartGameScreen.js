import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(currentNumber) {
    setEnteredNumber(currentNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      showAlert("Invalid Input");
      resetInputHandler();
      return;
    }

    console.log("Valid Number!");
  }

  const showAlert = (title) =>
    Alert.alert(title, "Please enter a valid number.", [
      {
        text: "Okay",
        style: "destructive",
        onPress: resetInputHandler,
      },
    ]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        value={enteredNumber}
        onChangeText={numberInputHandler}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none" // not important here
      />
      {/* Buttons are here */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset </PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 18,
    marginTop: 100,
    backgroundColor: "#3b021f",
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
