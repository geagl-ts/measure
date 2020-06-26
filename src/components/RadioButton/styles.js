import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    radioText: {
        marginLeft: 8,
        fontSize: 20,
        color: "#2a2a2a",
        fontWeight: "700",
        textTransform: "capitalize",
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#2a2a2a",
        alignItems: "center",
        justifyContent: "center",
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "#2a2a2a",
    },
});

export default styles;
