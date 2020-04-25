import React, { Children, cloneElement } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
});

import { useForm } from "../hooks";

const FormContainer = ({ children, initialState, onSubmit }) => {
    const { handleSubmit, subscribe, inputs } = useForm(initialState, onSubmit);

    const childrenWithProps = Children.map(children, (child) => {
        return cloneElement(child, {
            handleSubmit,
            subscribe,
            inputs,
        });
    });

    return <View style={styles.container}>{childrenWithProps}</View>;
};

export default FormContainer;
