import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//mis componentes
import {
    ContenedorEstandar,
    EntradaDeTexto,
    Boton,
    TituloCampo,
} from "../../../components";

//Mutations
import updateClient from "./Graphql/updateClient";

//mutacion
const UPDATE_CLIENT = gql`
    ${updateClient}
`;

//main component
const UpdateClientForm = ({ route, navigation }) => {
    //variable para el nuevo nombre
    const [name, setName] = React.useState(route.params.name);

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
            <TituloCampo label="nuevo nombre" />
            <EntradaDeTexto
                placeholder="escriba el nombre"
                styleInput="gray-input"
                onChangeText={onChangeNameField}
                value={name}
            />
            <Boton
                tcolor={"#fff"}
                onSubmit={onSubmit}
                tzise={18}
                label="cambiar"
                containerStyles={{ marginTop: 20 }}
            />
        </ContenedorEstandar>
    );
};

export default UpdateClientForm;
