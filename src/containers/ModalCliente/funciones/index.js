import { useState } from "react";
import { Alert } from "react-native";

import Toast from "../../../features/messageInScreen";

const cerrarModal = (modalState) => () => {
    modalState[1](!modalState[0]);
};

const abrirModal = (modalState) => () => {
    modalState[1](true);
};

const agregarTelefono = (navigate, modalState, clientid) => () => {
    modalState[1](!modalState[0]);
    navigate("FormularioTelefono", { clientid });
};

const eliminarTelefono = (eliminarTelefono, data, navigate, modalState) => {
    try {
        Alert.alert("Confirmar", "Esta seguro?", [
            {
                text: "cancelar",
            },
            {
                text: "confirmar",
                onPress: async () => {
                    const { data: info } = await eliminarTelefono({
                        variables: data,
                    });
                    Toast(info.eliminarTelefono.message);
                    modalState[1](!modalState[0]);
                    navigate("AuthLoading");
                },
            },
        ]);
    } catch (e) {
        console.log(e);
    }
};

export default {
    cerrarModal,
    agregarTelefono,
    abrirModal,
    eliminarTelefono,
};
