import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        width: "90%",
        padding: "3%",
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 2,
    },
});

const Input = ({
    input,
    subscribe,
    placeholder,
    color,
    placeholderColor,
    inputName,
    onChange,
    defaultValue,
    bgColor,
    borderRadius,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={[
                styles.input,
                bgColor
                    ? { backgroundColor: bgColor }
                    : { backgroundColor: "white" },
                color
                    ? {
                          color,
                          borderColor: color,
                      }
                    : {
                          backgroundColor: "white",
                          color: "#171717",
                          borderColor: "#171717",
                      },
                borderRadius ? { borderRadius } : { borderRadius: 0 },
            ]}
            placeholderTextColor={
                placeholderColor ? placeholderColor : "#474747"
            }
            value={input ? input[inputName] : defaultValue}
            onChangeText={subscribe ? subscribe(inputName) : onChange}
        />
    );
};

export default Input;
