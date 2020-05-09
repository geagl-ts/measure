import React from "react";
import { View, Image, StyleSheet, AsyncStorage } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Link from "../containers/Link";
import { Text } from "../components";

//get user query
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//query
const GET_USER_DATA = gql`
    query {
        getUser {
            userData {
                email
            }
        }
    }
`;

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
    //implement useQuery Hook
    const { loading, data, refetch } = useQuery(GET_USER_DATA);

    // //useEffect que se activa cuando regreso a la pantalla
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener("focus", async () => {
    //         refetch();
    //     });

    //     return unsubscribe;
    // }, [navigation]);

    const onPressLink = async () => {
        await AsyncStorage.removeItem("Token");
        navigation.navigate("AuthLoading");
    };

    if (loading) {
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
                </View>
            </LinearGradient>
        );
    } else {
        const { email } = data.getUser.userData;

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
                    <Title label="Correo Electronico">{email}</Title>
                    <View
                        style={{
                            width: "100%",
                            height: "55%",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            marginBottom: 25,
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
    }
};

const titleStyles = StyleSheet.create({
    container: {
        width: "90%",
    },
    text: {
        color: "#2ba6ff",
        fontSize: 26,
    },
});

const Title = ({ label, children }) => {
    return (
        <View style={{ ...styles.container }}>
            <Text fontWeight="bold" otherStyles={{ ...titleStyles.text }}>
                --- {label} ---
            </Text>
            <Text
                fontWeight="medium"
                otherStyles={{ ...titleStyles.text, fontSize: 24 }}
            >
                {children}
            </Text>
        </View>
    );
};

export default About;
