import React from "react";

import { View } from "react-native";

import { styles } from "./styles";

const index = ({ children, mv }) => {
    return (
        <View style={{ ...styles.contenedor, marginVertical: mv ? mv : 0 }}>
            {children}
        </View>
    );
};

export default index;
