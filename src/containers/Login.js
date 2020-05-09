import React, { useState } from "react";
import { StyleSheet, Image, AsyncStorage } from "react-native";
import { Input, FormContainer, Button, Text } from "../components";
import Link from "./Link";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// * https://coolors.co/ebe9e9-f3f8f2-3581b8-fcb07e-dee2d6

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: "#2ba6ff",
    },
    image: {
        width: "80%",
        height: 150,
        resizeMode: "contain",
        marginBottom: 15,
    },
});

const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            message
            loading
            user {
                token
            }
        }
    }
`;

//features
import PrintMessage from "../features/messageInScreen";

const validInputs = function (values) {
    const email = String(values.email);
    const password = String(values.password);

    if (email.length === 0 || email.length < 8 || password.length === 0) {
        return false;
    } else {
        return {
            email: email.trim().toLowerCase(),
            password,
        };
    }
};

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const initialState = {
        email: "",
        password: "",
    };

    const [login] = useMutation(LOGIN);

    const onSubmit = async (values) => {
        if (validInputs(values)) {
            setLoading(true);

            const { data } = await login({
                variables: values,
            });

            if (data.login.message === "Usuario y/o Contraseña incorrecto") {
                PrintMessage(data.login.message);
            } else {
                const { token } = data.login.user;

                await AsyncStorage.setItem("Token", token);
                setLoading(data.login.loading);
                PrintMessage(data.login.message);

                navigation.navigate("HomeNavigator");
            }
        } else {
            PrintMessage("Verifique su informacion");
        }
    };

    const onSubmitLink = () => {
        navigation.push("SignUp");
    };

    if (loading) {
        return (
            <FormContainer initialState={initialState} onSubmit={onSubmit}>
                <Image
                    source={require("../../assets/signin.png")}
                    style={styles.image}
                />
            </FormContainer>
        );
    } else {
        return (
            <FormContainer initialState={initialState} onSubmit={onSubmit}>
                <Image
                    source={require("../../assets/signin.png")}
                    style={styles.image}
                />
                <Text fontWeight="medium" otherStyles={styles.text}>
                    Correo electronico:
                </Text>
                <Input
                    placeholder="correo electronico"
                    margin={10}
                    inputName={"email"}
                    borderRadius={50}
                    color={"#2ba6ff"}
                    placeholderColor={"#79c5fc"}
                    shadow={true}
                />
                <Text fontWeight="medium" otherStyles={styles.text}>
                    Contraseña:
                </Text>
                <Input
                    placeholder="contraseña"
                    margin={10}
                    inputName={"password"}
                    borderRadius={50}
                    color={"#2ba6ff"}
                    placeholderColor={"#79c5fc"}
                    isPassword={true}
                    shadow={true}
                    textContentType={"password"}
                />
                <Button
                    margin={15}
                    borderRadius={50}
                    bgColor={"#2ba6ff"}
                    title="Iniciar sesion"
                    fontSize={18}
                    letterSpacing={1}
                    shadow={true}
                    iconName="md-log-in"
                />
                <Link color="#2ba6ff" onPress={onSubmitLink} underline={true}>
                    no tienes una cuenta?
                </Link>
            </FormContainer>
        );
    }
};

export default Login;
