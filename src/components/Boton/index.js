import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLOR, BACKGROUND_COLOR } from "./LocalVariables";
import { styles } from "./styles";

const index = ({ children, bg, tcolor, onSubmit }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.contenedor,
                backgroundColor: bg || BACKGROUND_COLOR,
            }}
            activeOpacity={0.5}
            onPress={onSubmit}
        >
            <Text style={{ ...styles.texto, color: tcolor || COLOR }}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default index;
