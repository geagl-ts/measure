import React from "react";
import { Input, FormContainer, Button } from "../components";

// * https://coolors.co/ebe9e9-f3f8f2-3581b8-fcb07e-dee2d6

const Login = () => {
    const initialState = {
        email: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <FormContainer initialState={initialState} onSubmit={onSubmit}>
            <Input
                placeholder="correo electronico"
                margin={10}
                inputName={"email"}
                borderRadius={50}
                color={"#3581b8"}
                placeholderColor={"#3581b8"}
            />
            <Input
                placeholder="contraseña"
                margin={10}
                inputName={"password"}
                borderRadius={50}
                color={"#3581b8"}
                placeholderColor={"#3581b8"}
                isPassword={true}
                textContentType={"password"}
            />
            <Button
                margin={10}
                borderRadius={50}
                bgColor={"#3581b8"}
                title={"Iniciar sesion"}
                fontSize={20}
                letterSpacing={1}
            />
        </FormContainer>
    );
};

export default Login;
