import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../components";

const Link = ({ children, color, fontSize, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
                onPress();
            }}
        >
            <Text
                fontWeight="regular"
                otherStyles={{
                    textTransform: "lowercase",
                    color: color ? color : "red",
                    fontSize: fontSize ? fontSize : 20,
                    textDecorationLine: "underline"
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Link;
