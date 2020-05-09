import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Input, FormContainer, Button, Text } from "../components";
import Link from "./Link";

import PrintMessage from "../features/messageInScreen";

//new account apollo graphql
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

//register user mutation
const REGISTER = gql`
    mutation register($email: String!, $password: String!) {
        register(input: { email: $email, password: $password }) {
            message
            loading
        }
    }
`;

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

const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [register] = useMutation(REGISTER);

    const initialState = {
        email: "",
        password: "",
    };

    const onSubmit = async (values) => {
        if (
            !String(values.email).length > 0 ||
            !String(values.password).length > 0
        ) {
            PrintMessage("No puede haber campos vacios");
        } else {
            setLoading(true);

            const { data } = await register({
                variables: values,
            });

            const { loading, message } = data.register;

            setLoading(loading);

            if (message === "Registro exitoso") {
                PrintMessage(message);
                navigation.navigate("Login");
            } else {
                PrintMessage(message);
            }
        }
    };

    const onSubmitLink = () => {
        navigation.push("Login");
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
                    title="Crear Cuenta"
                    fontSize={18}
                    letterSpacing={1}
                    shadow={true}
                    iconName="md-log-in"
                />
                <Link underline={true} color="#2ba6ff" onPress={onSubmitLink}>
                    tienes una cuenta?
                </Link>
            </FormContainer>
        );
    }
};

export default SignUp;
