import { StyleSheet } from "react-native";

export const BLACK_COLOR = "#2a2a2a";

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: BLACK_COLOR,
        textTransform: "capitalize",
    },
    input: {
        width: "80%",
        height: 50,
        textAlign: "center",
        textAlignVertical: "center",
        color: BLACK_COLOR,
        backgroundColor: "#efefef",
        fontSize: 20,
        borderRadius: 3,
        fontWeight: "bold",
    },
    warning: {
        fontSize: 16,
        textTransform: "uppercase",
        color: "#f4bc04",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 5,
    },
    setMargin: {
        marginBottom: 15,
    },
});

export default styles;
