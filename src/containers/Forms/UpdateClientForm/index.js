import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//mis componentes
import {
    ContenedorEstandar,
    Titulo,
    EntradaDeTexto,
    Boton,
    Separador,
} from "../../../components";

//constantes
import { COLOR_ESTANDAR, PLACEHOLDER_COLOR_ESTANDAR } from "./LocalVariables";

//Mutations
import updateClient from "./Graphql/updateClient";

//mutacion
const UPDATE_CLIENT = gql`
    ${updateClient}
`;

//main component
const UpdateClientForm = ({ route, navigation }) => {
    //variable para el nuevo nombre
    const [name, setName] = React.useState("");

    //implementacion de la mutacion
    const [updateClient] = useMutation(UPDATE_CLIENT);

    /*
        obtiene al cliente en los parametros de la 
        navegacion
    */
    const { clientId } = route.params;

    //se ejecuta cuento pulso el boton de cambiar
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

    /**
     * cambia el valor del name con lo que
     * pongo en el input
     */
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
