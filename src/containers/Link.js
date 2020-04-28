import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../components";

const Link = ({
    children,
    color,
    fontSize,
    onPress,
    underline,
    fontWeight,
    uppercase,
    letterSpacing,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
                onPress();
            }}
        >
            <Text
                fontWeight={fontWeight ? fontWeight : "regular"}
                otherStyles={{
                    textTransform: uppercase ? "uppercase" : "lowercase",
                    color: color ? color : "red",
                    fontSize: fontSize ? fontSize : 20,
                    textDecorationLine: underline ? "underline" : "none",
                    letterSpacing: letterSpacing ? letterSpacing : 0,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Link;
