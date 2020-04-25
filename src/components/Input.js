import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        width: "90%",
        paddingVertical: "3%",
        paddingHorizontal: 15,
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
    margin,
    isPassword,
    textContentType,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={[
                styles.input,
                margin ? { margin } : { margin: 0 },
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
            textContentType={textContentType ? textContentType : "emailAddress"}
            secureTextEntry={isPassword ? isPassword : false}
        />
    );
};

export default Input;
