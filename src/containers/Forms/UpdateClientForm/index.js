import React from "react";

import {
    ContenedorEstandar,
    Titulo,
    EntradaDeTexto,
    Boton,
    Separador,
} from "../../../components";

import { COLOR_ESTANDAR, PLACEHOLDER_COLOR_ESTANDAR } from "./LocalVariables";

const UpdateClientForm = () => {
    return (
        <ContenedorEstandar>
            <Titulo color={COLOR_ESTANDAR}>Nuevo Nombre</Titulo>
            <Separador mv={15}>
                <EntradaDeTexto
                    placeholder="escriba el nombre"
                    styleInput="big-font"
                    color={COLOR_ESTANDAR}
                    phcolor={PLACEHOLDER_COLOR_ESTANDAR}
                />
            </Separador>
            <Boton bg={COLOR_ESTANDAR} tcolor={"#fff"}>
                cambiar
            </Boton>
        </ContenedorEstandar>
    );
};

export default UpdateClientForm;
