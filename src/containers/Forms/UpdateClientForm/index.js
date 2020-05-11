import React from "react";

import {
    ContenedorEstandar,
    Titulo,
    EntradaDeTexto,
    Boton,
} from "../../../components";

import { COLOR_ESTANDAR, PLACEHOLDER_COLOR_ESTANDAR } from "./LocalVariables";

const UpdateClientForm = () => {
    return (
        <ContenedorEstandar>
            <Titulo color={COLOR_ESTANDAR}>Nuevo Nombre</Titulo>
            <EntradaDeTexto
                placeholder="nombre"
                styleInput="underline"
                color={COLOR_ESTANDAR}
                phcolor={PLACEHOLDER_COLOR_ESTANDAR}
            />
            <Boton bg={COLOR_ESTANDAR} tcolor={"#fff"}>
                Cambiar
            </Boton>
        </ContenedorEstandar>
    );
};

export default UpdateClientForm;
