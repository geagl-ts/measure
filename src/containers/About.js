import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Link from "../containers/Link";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loading: {
        backgroundColor: "#fff",
        width: "80%",
        height: "80%",
        borderRadius: 10,
        justifyContent: "flex-start",
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
    const onPressLink = () => {
        navigation.navigate("AuthLoading");
    };

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
                        fontSize={21}
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
