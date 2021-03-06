import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { LOGIN, REGISTRO } from "./Graphql/Mutation";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";

import Toast from "../../features/messageInScreen";

// TOKEN
import { setToken } from "../../../token";

// Componenetes globales
import { ContenedorEstandar, Cargando, Imagen } from "../../components";

// Componentes locales
import { Formulario } from "./Componentes";

// Styles
import { styles } from "./styles";

// Validaciones
import validaciones from "./validaciones";

export default function LoginRegistro({ navigation }) {
    const [isLogin, setLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    let initialValues = {
        email: "",
        password: "",
    };

    const [login] = useMutation(LOGIN);
    const [register] = useMutation(REGISTRO);

    const onSubmitForm = async (values) => {
        if (isLogin) {
            const { data } = await login({ variables: values });

            if (!data.login.user) {
                Toast(data.login.message);
            } else {
                setLoading(true);
                await setToken(data.login.user.token);
                navigation.navigate("HomeNavigator");
                setLoading(false);
            }
        } else {
            const { data } = await register({ variables: values });

            if (data.register.message === "Registro exitoso") {
                setLoading(true);
                Toast(data.register.message);
                setLogin(true);
                initialValues = {
                    email: "",
                    password: "",
                };
                setLoading(false);
            } else {
                Toast(data.register.message);
            }
        }
    };

    if (loading)
        return (
            <ContenedorEstandar>
                <Imagen source={require("../../../assets/signin.png")} />
                <Cargando />
            </ContenedorEstandar>
        );

    return (
        <ContenedorEstandar>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ ...styles.keyboard_avoiding }}
            >
                <Imagen source={require("../../../assets/signin.png")} />
                <Formik
                    onSubmit={onSubmitForm}
                    validationSchema={
                        isLogin
                            ? validaciones.validLoginSchema
                            : validaciones.validRegisterSchema
                    }
                    initialValues={initialValues}
                >
                    <Formulario login={isLogin} setLogin={setLogin} />
                </Formik>
            </KeyboardAvoidingView>
        </ContenedorEstandar>
    );
}
