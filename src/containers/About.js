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
                id
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

    //useEffect que se activa cuando regreso a la pantalla
    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", async () => {
            refetch();
        });

        return unsubscribe;
    }, [navigation]);

    const onPressLink = async () => {
        await AsyncStorage.removeItem("Token");
        navigation.navigate("AuthLoading");
    };

    if (loading) {
        return (
            <MainContainer>
                <AfterMainContainer
                    otherStyles={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ImagenContainer />
                </AfterMainContainer>
            </MainContainer>
        );
    } else {
        const { email } = data.getUser.userData;

        return (
            <MainContainer>
                <AfterMainContainer>
                    <ImagenContainer />
                    {/* datos del usuario */}
                    <Title label="Correo Electronico">{email}</Title>
                    {/* contenedor del boton de cerrar sesion */}
                    <CerrarSesionContainer onSubmit={onPressLink} />
                </AfterMainContainer>
            </MainContainer>
        );
    }
};

const MainContainer = ({ children }) => {
    return (
        <LinearGradient
            colors={["#2ba6ff", "#2bffed"]}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    );
};

const AfterMainContainer = ({ children, otherStyles }) => {
    return (
        <View
            style={{
                ...styles.aboutContainer,
                ...styles.shadow,
                ...otherStyles,
            }}
        >
            {children}
        </View>
    );
};

const ImagenContainer = () => {
    return (
        <Image
            source={require("../../assets/signin.png")}
            style={styles.image}
        />
    );
};

const CerrarSesionContainer = ({ onSubmit }) => {
    return (
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
                onPress={onSubmit}
                uppercase={true}
                letterSpacing={1}
            >
                Cerrar sesion
            </Link>
        </View>
    );
};

//estilos de los titulos
const titleStyles = StyleSheet.create({
    container: {
        width: "90%",
    },
    text: {
        color: "#2ba6ff",
        fontSize: 26,
    },
});

//compomente para mostrar un item y su descripcion
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
