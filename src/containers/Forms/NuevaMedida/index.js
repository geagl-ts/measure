import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";

import { ContenedorEstandar, Titulo, Imagen } from "../../../components";
// Componentes locales
import Campos from "./componentes/Campos";

import initialState from "./initialState";
import validSchema from "./validaciones/medidas";
import { AGREGAR_MEDIDA } from "./graphql/Mutation";
import onSubmit from "./funciones/onSubmit";

export default function Formulario(props) {
    const { clientId } = props.route.params;

    const [addMeasure] = useMutation(AGREGAR_MEDIDA);

    return (
        <ContenedorEstandar>
            <Imagen source={require("../../../../assets/signin.png")} />
            <Titulo color="#2a2a2a">nueva medida</Titulo>
            <Formik
                initialValues={initialState}
                onSubmit={(values) =>
                    onSubmit(values, clientId, addMeasure, props.navigation)
                }
                validationSchema={validSchema}
            >
                <Campos />
            </Formik>
        </ContenedorEstandar>
    );
}
