import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  const [isPressed, setIsPressed] = useState(false);
  function pressHandler() {
    setIsPressed(!isPressed);
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? styles.pressed : styles.buttonInnerContainer
        }
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
