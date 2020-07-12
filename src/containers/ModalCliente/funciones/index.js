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

const eliminarTelefono = (eliminarTelefono, data, props) => {
    const { navigate, modalState } = props;

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

const ocultarModal = (modal) => {
    modal[1](!modal[0]);
};

const agregarMedidas = (navigate, modal, clientId) => () => {
    navigate("NuevaMedidaScreen", { clientId });
    ocultarModal(modal);
};

const eliminarMedida = async (medidasId, eliminar, props) => {
    try {
        const { modalState, navigate, clienteId } = props;

        Alert.alert("Confirmar", "Esta seguro?", [
            {
                text: "cancelar",
            },
            {
                text: "confirmar",
                onPress: async () => {
                    const { data } = await eliminar({
                        variables: {
                            medidasId,
                            clienteId,
                        },
                    });

                    if (data.deleteMeasure.success) {
                        navigate("AuthLoading");
                        ocultarModal(modalState);
                        Toast(data.deleteMeasure.message);
                    } else {
                        Toast(data.deleteMeasure.error);
                    }
                },
            },
        ]);
    } catch (e) {
        Toast("Ando trabajando en eso, disculpa");
    }
};

export default {
    cerrarModal,
    agregarTelefono,
    abrirModal,
    eliminarTelefono,
    agregarMedidas,
    eliminarMedida,
};
