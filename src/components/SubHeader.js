import React from "react";
import { Text } from "react-native";

import { GlobalStyles as gs } from "./GlobalStyles";

export default ({ children }) => {
    return (
        <Text
            style={{
                ...gs.text,
                fontSize: 24,
            }}
        >
            {children}
        </Text>
    );
};
