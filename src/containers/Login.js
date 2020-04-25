import React from "react";
import { Image } from "react-native";
import { Input, FormContainer, Button, SectionForm } from "../components";

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
            <SectionForm>
                <Image
                    source={{
                        uri:
                            "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        margin: 15,
                        resizeMode: "cover",
                    }}
                />
            </SectionForm>
            <SectionForm justifyContent={"flex-start"}>
                <Input
                    placeholder="correo electronico"
                    margin={5}
                    inputName={"email"}
                    borderRadius={50}
                    color={"#3581b8"}
                    placeholderColor={"#3581b8"}
                />
                <Input
                    placeholder="contraseña"
                    margin={5}
                    inputName={"password"}
                    borderRadius={50}
                    color={"#3581b8"}
                    placeholderColor={"#3581b8"}
                    isPassword={true}
                    textContentType={"password"}
                />
                <Button
                    margin={15}
                    borderRadius={50}
                    bgColor={"#3581b8"}
                    title={"Iniciar sesion"}
                    fontSize={20}
                    letterSpacing={1}
                />
            </SectionForm>
        </FormContainer>
    );
};

export default Login;
