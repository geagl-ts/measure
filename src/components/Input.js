import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        width: "90%",
        paddingHorizontal: 15,
        fontSize: 22,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
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
    borderColor,
    shadow,
    width,
    paddingVertical,
    paddingHorizontal,
    elevation,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={[
                styles.input,
                {
                    backgroundColor: "red",
                },
                {
                    paddingVertical: paddingVertical ? paddingVertical : 10,
                    paddingHorizontal: paddingHorizontal
                        ? paddingHorizontal
                        : 29,
                },
                margin ? { margin } : { margin: 0 },
                width ? { width } : { width: "90%" },
                bgColor
                    ? { backgroundColor: bgColor }
                    : { backgroundColor: "white" },
                color
                    ? {
                          color,
                      }
                    : {
                          backgroundColor: "white",
                          borderColor: "#171717",
                      },
                borderRadius ? { borderRadius } : { borderRadius: 0 },
                borderColor ? { borderColor } : { borderColor: "transparent" },
                shadow ? styles.shadow : {},
            ]}
            placeholderTextColor={
                placeholderColor ? placeholderColor : "#474747"
            }
            value={input ? input[inputName] : defaultValue}
            onChangeText={subscribe ? subscribe(inputName) : onChange}
            textContentType={textContentType ? textContentType : "emailAddress"}
            secureTextEntry={isPassword ? isPassword : false}
            autoCapitalize="none"
        />
    );
};

export default Input;
