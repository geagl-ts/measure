import React from "react";
import { Text } from "react-native";

export const Titulo = ({ children, fontSize, color }) => {
    return (
        <Text style={{ fontSize: fontSize || 22, color: color || "#aaa" }}>
            {children}
        </Text>
    );
};
