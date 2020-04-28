import React from "react";
import { StyleSheet, Image } from "react-native";
import { Input, FormContainer, Button, Text } from "../components";
import Link from "./Link";

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

const Login = ({ navigation }) => {
    const initialState = {
        email: "",
        password: "",
    };

    const onSubmit = (values) => {
        navigation.navigate("About");
    };

    const onSubmitLink = () => {
        navigation.push("SignUp");
    };

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
};

export default Login;
