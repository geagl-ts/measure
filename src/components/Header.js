import React from "react";
import { Text, StyleSheet } from "react-native";

import { GlobalStyles as gs } from "./GlobalStyles";

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        fontWeight: "bold",
    },
});

export default ({ children }) => {
    return (
        <Text
            style={{
                ...gs.text,
                ...styles.header,
            }}
        >
            {children}
        </Text>
    );
};
