import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Imagen, BotonCerrarSesion } from "./Componentes";
import { Text } from "react-native";

import { styles } from "./Styles/styles";
import { OBTENER_USUARIO } from "./Graphql/Query";
import { ContenedorEstandar } from "../../components";

export default function index(props) {
    const {
        loading: loadingDatosUsuario,
        error: errorDatosUsuario,
        data: datosUsuario,
    } = useQuery(OBTENER_USUARIO);

    if (loadingDatosUsuario || errorDatosUsuario) return null;

    if (datosUsuario !== undefined) {
        const usuario = datosUsuario.getUser.userData;

        return (
            <ContenedorEstandar>
                <Imagen />
                <Text style={{ ...styles.correo }}>{usuario.email}</Text>
                <BotonCerrarSesion navigation={props.navigation} />
            </ContenedorEstandar>
        );
    }

    return null;
}
