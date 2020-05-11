import React, { Children } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Contenido } from "./Componentes";

import {
    PRIMER_COLOR_GRADIENTE,
    SEGUNDO_COLOR_GRADIENTE,
} from "./LocalVariables";

import { styles } from "./styles";

const index = ({ children }) => {
    return (
        <LinearGradient
            colors={[PRIMER_COLOR_GRADIENTE, SEGUNDO_COLOR_GRADIENTE]}
            style={{ ...styles.container }}
        >
            <Contenido>{children}</Contenido>
        </LinearGradient>
    );
};

export default index;
