import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLOR, BACKGROUND_COLOR, TEXT_SIZE_ESTANDAR } from "./LocalVariables";
import { styles } from "./styles";

const index = ({ children, bg, tcolor, onSubmit, tzise }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.contenedor,
                backgroundColor: bg || BACKGROUND_COLOR,
            }}
            activeOpacity={0.5}
            onPress={onSubmit}
        >
            <Text
                style={{
                    ...styles.texto,
                    color: tcolor || COLOR,
                    fontSize: tzise || TEXT_SIZE_ESTANDAR,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default index;
