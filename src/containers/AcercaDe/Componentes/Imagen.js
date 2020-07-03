import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Imagen() {
    return (
        <Image
            source={require("../../../../assets/signin.png")}
            style={{ ...styles.imagen }}
        />
    );
}

const styles = StyleSheet.create({
    imagen: {
        width: 300,
        height: 180,
        resizeMode: "contain",
    },
});
