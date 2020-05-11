import { StyleSheet } from "react-native";

import { PADDING_ESTANDAR, TEXT_SIZE_ESTANDAR } from "./LocalVariables";

export const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: PADDING_ESTANDAR,
        paddingVertical: PADDING_ESTANDAR / 2,
        borderRadius: 50,
    },
    texto: {
        fontSize: TEXT_SIZE_ESTANDAR,
        fontWeight: "bold",
    },
});
