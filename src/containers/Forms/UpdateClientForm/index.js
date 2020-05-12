import React from "react";

import {
    ContenedorEstandar,
    Titulo,
    EntradaDeTexto,
    Boton,
    Separador,
} from "../../../components";

import { COLOR_ESTANDAR, PLACEHOLDER_COLOR_ESTANDAR } from "./LocalVariables";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import updateClient from "./Graphql/updateClient";

const UPDATE_CLIENT = gql`
    ${updateClient}
`;

const UpdateClientForm = ({ route, navigation }) => {
    const [name, setName] = React.useState("");

    const [updateClient] = useMutation(UPDATE_CLIENT);

    const { clientId } = route.params;

    const onSubmit = async () => {
        const {
            data: {
                updateClient: { message },
            },
        } = await updateClient({
            variables: {
                clientId,
                name,
            },
        });

        if (message === "good") {
            navigation.navigate("HomeNavigator");
        }
    };

    const onChangeNameField = (value) => {
        setName(value);
    };

    return (
        <ContenedorEstandar>
            <Titulo color={COLOR_ESTANDAR}>Nuevo Nombre</Titulo>
            <Separador mv={15}>
                <EntradaDeTexto
                    placeholder="escriba el nombre"
                    styleInput="big-font"
                    color={COLOR_ESTANDAR}
                    phcolor={PLACEHOLDER_COLOR_ESTANDAR}
                    onChangeText={onChangeNameField}
                    value={name}
                />
            </Separador>
            <Boton bg={COLOR_ESTANDAR} tcolor={"#fff"} onSubmit={onSubmit}>
                cambiar
            </Boton>
        </ContenedorEstandar>
    );
};

export default UpdateClientForm;
