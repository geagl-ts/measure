import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "../components/";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#2ba6ff"
    },
    text: {
        fontSize: 32,
        color: "#fff"
    },
    image: {
        width: "80%",
        height: 200,
        resizeMode: "contain",
        marginBottom: 15
    }
});

const AuthLoading = ({ navigation }) => {
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAuthLoading(false);
            navigation.navigate("Login");
        }, 5000);
    }, []);

    if (authLoading) {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../assets/signin.png")}
                    style={styles.image}
                />
                <Text fontWeight="bold" otherStyles={styles.text}>
                    Cargando
                </Text>
            </View>
        );
    } else {
        return <View style={styles.container}></View>;
    }
};

export default AuthLoading;
