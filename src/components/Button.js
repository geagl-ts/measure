import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 17,
        paddingVertical: 11,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        textTransform: "uppercase",
        letterSpacing: 2,
        fontFamily: "quicksand-bold",
    },
});

const Button = ({
    color,
    margin,
    bgColor,
    borderRadius,
    handleSubmit,
    title,
    fontSize,
    letterSpacing,
    shadow,
    iconName,
    iconColor,
    iconSize,
    elevation,
}) => {
    const [isLoaded] = useFonts({
        "quicksand-bold": require("../../assets/fonts/Quicksand/bold.ttf"),
    });

    if (!isLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity
                style={[
                    styles.buttonContainer,
                    bgColor
                        ? { backgroundColor: bgColor }
                        : { backgroundColor: "#1a1a1a" },
                    margin ? { margin } : { margin: 0 },
                    borderRadius ? { borderRadius } : { borderRadius: 0 },
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
                    elevation ? { elevation } : { elevation: 9 },
                ]}
                onPress={handleSubmit}
                activeOpacity={0.5}
            >
                <Text
                    style={[
                        styles.buttonText,
                        color ? { color } : { color: "white" },
                        fontSize ? { fontSize } : { fontSize: 22 },
                        letterSpacing
                            ? { letterSpacing }
                            : { letterSpacing: 2 },
                    ]}
                >
                    {title}
                </Text>
                <View style={{ marginLeft: 10 }}>
                    <Ionicons
                        name={iconName ? iconName : "md-log-in"}
                        size={iconSize ? iconSize : 35}
                        color={iconColor ? iconColor : "#fff"}
                    />
                </View>
            </TouchableOpacity>
        );
    }
};

export default Button;
