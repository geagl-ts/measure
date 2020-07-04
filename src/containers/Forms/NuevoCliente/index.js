import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";

// Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_USUARIO_TELEFONOS } from "./Graphql/Query";
// Componentes Locales
import Formulario from "./Componentes/Formulario";
// Componentes Globales
import { ContenedorEstandar, Imagen } from "../../../components";
// Estilos globales
import { keyboard_avoiding } from "../../../constants/styles";

export default () => {
    const { data, loading } = useQuery(GET_USUARIO_TELEFONOS);

    if (loading) return null;

    const initialValues = {
        name: "",
        user: data.getUser.userData.id,
        phone: "",
        phoneType: data.getPhoneTypes.types[0].id,
        height: "",
        waist: "",
    };

    const handleSubmit = (valores) => {
        console.log(valores);
    };

    return (
        <ContenedorEstandar>
            <Imagen source={require("../../../../assets/signin.png")} />
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ ...keyboard_avoiding }}
                >
                    <Formulario data={data.getPhoneTypes.types} />
                </KeyboardAvoidingView>
            </Formik>
        </ContenedorEstandar>
    );
};
