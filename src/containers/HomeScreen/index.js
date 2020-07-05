import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Toast from "../../features/messageInScreen";
import {
    Contenedor,
    NuevoClienteBtn,
    SearchBar,
    Contenido,
    TargetaCliente,
} from "./componentes";

import { GET_USER } from "./graphql/queries";
import { REMOVE_CLIENT } from "./graphql/mutations";
import { isSearched } from "./funciones";

export default function index(props) {
    const [clientes, setClientes] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const { loading, refetch } = useQuery(GET_USER);
    const [removeClient] = useMutation(REMOVE_CLIENT);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener("focus", async () => {
            const { data } = await refetch();
            setClientes(data.getUser.userData.clients);
        });

        return unsubscribe;
    }, [props.navigation]);

    const onDelete = async (clientId) => {
        try {
            Alert.alert("Confirmacion", "Estas seguro?", [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Confirmar",
                    onPress: async () => {
                        const {
                            data: {
                                removeClient: { message: msg },
                            },
                        } = await removeClient({
                            variables: {
                                clientId,
                            },
                        });

                        const noValidas = ["error", "No debes estar aqui"];

                        if (noValidas.includes(msg)) {
                            Toast(msg);
                        } else {
                            Toast(msg);
                            const { data } = await refetch();
                            setClientes(data.getUser.userData.clients);
                        }
                    },
                },
            ]);
        } catch (e) {
            Toast("No se que paso");
        }
    };

    if (loading) return null;

    const navigateTo = (nombre, args) =>
        props.navigation.navigate(nombre, args);

    return (
        <Contenedor>
            <NuevoClienteBtn onSubmit={() => navigate("NuevoCliente")} />
            <SearchBar
                placeholder="nombre"
                onChangeText={(value) => setSearchValue(value)}
                value={searchValue}
            />
            <Contenido>
                {clientes.filter(isSearched(searchValue)).map((cliente) => (
                    <TargetaCliente
                        key={cliente.id}
                        data={cliente}
                        navigation={props.navigation}
                        delete={() => {
                            onDelete(cliente.id);
                        }}
                        update={() =>
                            navigateTo("UpdateClientForm", {
                                clientId: cliente.id,
                                name: cliente.name,
                            })
                        }
                    />
                ))}
            </Contenido>
        </Contenedor>
    );
}
