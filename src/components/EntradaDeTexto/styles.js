import { StyleSheet } from "react-native";

import { PORCENTAJE, COLOR } from "./LocalVariables";

export const styles = StyleSheet.create({
    textInput: {
        fontSize: 26,
        maxWidth: PORCENTAJE(90),
        padding: 5,
        textAlign: "center",
        fontWeight: "bold",
    },
    underline: {
        backgroundColor: "#efefef",
        width: PORCENTAJE(90),
        paddingVertical: 10,
        borderBottomColor: COLOR,
        borderBottomWidth: 5,
    },
    border: { borderBottomColor: COLOR, borderBottomWidth: 5 },
    bigFont: {
        fontSize: 32,
    },
});

//underline style
export const styleInput = (style) => {
    switch (String(style).trim().toLowerCase()) {
        case "underline":
            return {
                ...styles.textInput,
                ...styles.underline,
                ...styles.border,
            };
        case "big-font":
            return {
                ...styles.textInput,
                ...styles.bigFont,
            };
        default:
            return styles.textInput;
    }
};
