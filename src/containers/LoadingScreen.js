import React from "react";
import { StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoadingScreen = () => {
    return (
        <LinearGradient
            style={styles.container}
            colors={["#2ba6ff", "#2bffed"]}
        >
            <View>
                <Image source={require("../../assets/signin.png")} />
            </View>
        </LinearGradient>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    content: {},
});
