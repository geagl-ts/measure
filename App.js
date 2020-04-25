import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import App from "./src";

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
};
