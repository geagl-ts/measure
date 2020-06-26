import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ConfirmDialog } from "../../components";
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
    const [searchValue, setSearchValue] = useState("");

    const {
        loading: loadingUserData,
        data: userData,
        refetch: refetchUserData,
    } = useQuery(GET_USER);
    const [removeClient] = useMutation(REMOVE_CLIENT);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener("focus", async () => {
            refetchUserData();
        });

        return unsubscribe;
    }, [props.navigation]);

    const onDelete = async (clientId) => {
        try {
            if (!ConfirmDialog()) return Toast("De acuerdo");

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
                refetch();
            } else {
                Toast(msg);
            }
        } catch (e) {
            Toast("No se que paso");
        }
    };

    const onUpdate = (clientId) => {
        props.navigation.navigate("UpdateClientForm", { clientId });
    };

    const nuevoClienteCallback = () => {
        props.navigation.navigate("NuevoCliente");
    };

    const handleChangeText = (v) => {
        setSearchValue(v);
    };

    if (loadingUserData) return null;

    if (userData !== undefined) {
        const clients = userData.getUser.userData.clients;

        return (
            <Contenedor>
                <NuevoClienteBtn onSubmit={nuevoClienteCallback} />
                <SearchBar
                    placeholder="nombre"
                    onChangeText={handleChangeText}
                    value={searchValue}
                />
                <Contenido>
                    {clients.filter(isSearched(searchValue)).map((cliente) => (
                        <TargetaCliente
                            key={cliente.id}
                            data={cliente}
                            navigation={props.navigation}
                            delete={() => {
                                onDelete(cliente.id);
                            }}
                            update={() => {
                                onUpdate(cliente.id);
                            }}
                        />
                    ))}
                </Contenido>
            </Contenedor>
        );
    }
}
