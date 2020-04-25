import React from "react";
import { View } from "react-native";

export default ({ children, justifyContent }) => {
    return (
        <View
            style={{
                height: "50%",
                width: "100%",
                justifyContent: justifyContent ? justifyContent : "center",
                alignItems: "center",
            }}
        >
            {children}
        </View>
    );
};
