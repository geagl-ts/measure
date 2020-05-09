import React from "react";
import { View, Image, StyleSheet, AsyncStorage } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Link from "../containers/Link";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    aboutContainer: {
        backgroundColor: "#fff",
        width: "90%",
        height: "90%",
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "5%",
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
    image: {
        width: 300,
        height: 180,
        resizeMode: "contain",
    },
    text: {
        fontSize: 22,
    },
});

const About = ({ navigation }) => {
    const onPressLink = async () => {
        await AsyncStorage.removeItem("Token");
        navigation.navigate("AuthLoading");
    };

    return (
        <LinearGradient
            colors={["#2ba6ff", "#2bffed"]}
            style={styles.container}
        >
            <View style={[styles.aboutContainer, styles.shadow]}>
                <Image
                    source={require("../../assets/signin.png")}
                    style={styles.image}
                />
                <View
                    style={{
                        width: "100%",
                        height: "60%",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Link
                        fontWeight="bold"
                        fontSize={20}
                        color="#2ba6ff"
                        onPress={onPressLink}
                        uppercase={true}
                        letterSpacing={1}
                    >
                        Cerrar sesion
                    </Link>
                </View>
            </View>
        </LinearGradient>
    );
};

export default About;
