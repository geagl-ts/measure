import React from "react";

import Formulario from "./FormularioNuevoTelefono";

export default function index({ navigation, route }) {
    return <Formulario navigation={navigation} route={route} />;
}
