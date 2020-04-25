import React from "react";
import { View, Text } from "react-native";
import { Input, FormContainer } from "../components";

const Login = () => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Input placeholder="correo electronico" />
            <Input placeholder="contraseña" />
        </View>
    );
};

export default Login;
