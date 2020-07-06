import { useState } from "react";

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

export default {
    cerrarModal,
    agregarTelefono,
    abrirModal,
};
