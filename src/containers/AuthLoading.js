import React, { useEffect } from "react";
import { View, StyleSheet, Image, AsyncStorage } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "../components/";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#2ba6ff",
    },
    loading: {
        backgroundColor: "#fff",
        width: "80%",
        height: "75%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    text: {
        fontSize: 22,
        color: "#2ba6ff",
        textTransform: "uppercase",
        letterSpacing: 1,
        textAlign: "center",
    },
    image: {
        width: "79%",
        height: 130,
        resizeMode: "contain",
    },
});

const AuthLoading = ({ navigation }) => {
    const verifySession = async () => {
        return await AsyncStorage.getItem("Token");
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", async () => {
            let tokenSession = await verifySession();

            if (tokenSession) {
                navigation.navigate("HomeNavigator");
            } else {
                navigation.navigate("LoginRegistro");
            }
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <LinearGradient
            colors={["#2ba6ff", "#2bffed"]}
            style={styles.container}
        >
            <View style={[styles.loading, styles.shadow]}>
                <Image
                    source={require("../../assets/signin.png")}
                    style={styles.image}
                />
                <Text
                    width="100%"
                    paddingHorizontal={0}
                    fontWeight="bold"
                    otherStyles={styles.text}
                >
                    Cargando
                </Text>
            </View>
        </LinearGradient>
    );
};

export default AuthLoading;
