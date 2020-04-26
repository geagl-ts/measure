import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../components";

const Link = ({ children, color, fontSize }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Text
                fontWeight="regular"
                otherStyles={{
                    textTransform: "lowercase",
                    color: color ? color : "red",
                    fontSize: fontSize ? fontSize : 20,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Link;
