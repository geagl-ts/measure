import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Colors from "../constants/colors";

export default function VistaMensajes({ route, navigation }) {
    const { cliente } = route.params;

    return (
        <View style={{ ...styles.container }}>
            <View style={{ ...styles.content }}>
                <Header label={cliente} style={{ ...styles.headerView }} />
            </View>
        </View>
    );
}

const Header = ({ label, ...rest }) => {
    return <Text {...rest}>{label}</Text>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#feffea",
    },
    content: {
        flex: 1,
        marginTop: "5.8%",
    },
    headerView: {
        backgroundColor: Colors.BLUE_COLOR,
        color: Colors.WHITE,
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },
});
