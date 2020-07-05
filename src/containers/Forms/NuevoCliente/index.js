import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";

// Graphql
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_USUARIO_TELEFONOS } from "./Graphql/Query";
import { AGREGAR_NUEVO_CLIENTE } from "./Graphql/Mutation";
// Componentes Locales
import Formulario from "./Componentes/Formulario";
// Componentes Globales
import { ContenedorEstandar, Imagen } from "../../../components";
// Estilos globales
import { keyboard_avoiding } from "../../../constants/styles";
// Funciones
import FormatearVariables from "./Funciones/FormatearVariables";
import Toast from "../../../features/messageInScreen";
// Validaciones
import schemaClienteValido from "./Validaciones/NuevoCliente";

export default ({ navigation: { navigate } }) => {
    const { data, loading } = useQuery(GET_USUARIO_TELEFONOS);
    const [addClient] = useMutation(AGREGAR_NUEVO_CLIENTE);

    if (loading) return null;

    const initialValues = {
        name: "",
        user: data.getUser.userData.id,
        phone: "",
        phoneType: data.getPhoneTypes.types[0].id,
        height: "",
        waist: "",
    };

    const handleSubmit = async (valores) => {
        try {
            const { data: addClientResponse } = await addClient({
                variables: FormatearVariables.variablesUsuario(valores),
            });

            if (!addClientResponse.addClient.success) {
                Toast(addClientResponse.addClient.message);
            } else {
                Toast(addClientResponse.addClient.message);
                navigate("HomeNavigator");
            }
        } catch (e) {
            Toast("Ya existe un cliente con ese nombre");
        }
    };

    return (
        <ContenedorEstandar>
            <Imagen source={require("../../../../assets/signin.png")} />
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schemaClienteValido}
            >
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
