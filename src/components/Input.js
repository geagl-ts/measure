import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const styles = StyleSheet.create({
    input: {
        width: "90%",
        paddingVertical: "04%",
        paddingHorizontal: 17,
        fontSize: 21,
        fontFamily: "quicksand-light",
        borderWidth: 2,
        textAlignVertical: "top",
        fontWeight: "700",
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
}) => {
    const [isLoaded] = useFonts({
        "quicksand-light": require("../../assets/fonts/Quicksand/light.ttf"),
    });

    if (!isLoaded) {
        return <AppLoading />;
    } else {
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
                          }
                        : {
                              backgroundColor: "white",
                              borderColor: "#171717",
                          },
                    borderRadius ? { borderRadius } : { borderRadius: 0 },
                    borderColor
                        ? { borderColor }
                        : { borderColor: "transparent" },
                    shadow
                        ? {
                              shadowColor: "#000",
                              shadowOffset: {
                                  width: 0,
                                  height: 4,
                              },
                              shadowOpacity: 0.32,
                              shadowRadius: 5.46,

                              elevation: 9,
                          }
                        : {},
                ]}
                placeholderTextColor={
                    placeholderColor ? placeholderColor : "#474747"
                }
                value={input ? input[inputName] : defaultValue}
                onChangeText={subscribe ? subscribe(inputName) : onChange}
                textContentType={
                    textContentType ? textContentType : "emailAddress"
                }
                secureTextEntry={isPassword ? isPassword : false}
            />
        );
    }
};

export default Input;
