import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 13,
    },
    buttonText: {
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 2,
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
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                bgColor
                    ? { backgroundColor: bgColor }
                    : { backgroundColor: "#1a1a1a" },
                margin ? { margin } : { margin: 0 },
                borderRadius ? { borderRadius } : { borderRadius: 0 },
            ]}
            onPress={handleSubmit}
            activeOpacity={0.5}
        >
            <Text
                style={[
                    styles.buttonText,
                    color ? { color } : { color: "white" },
                    fontSize ? { fontSize } : { fontSize: 22 },
                    letterSpacing ? { letterSpacing } : { letterSpacing: 2 },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
