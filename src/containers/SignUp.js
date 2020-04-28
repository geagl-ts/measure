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

const SignUp = ({ navigation }) => {
    const initialState = {
        email: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const onSubmitLink = () => {
        navigation.push("Login");
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
};

export default SignUp;
