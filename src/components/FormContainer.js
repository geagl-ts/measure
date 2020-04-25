import React, { Children, cloneElement } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
    },
});

import { useForm } from "../hooks";

const FormContainer = ({ initialState, onSubmit }) => {
    const { handleSubmit, subscribe, inputs } = useForm(initialState, onSubmit);

    const childrenWithProps = Children.map((child) => {
        return cloneElement(child, {
            handleSubmit,
            subscribe,
            inputs,
        });
    });

    return <View style={styles.container}>{childrenWithProps}</View>;
};

export default FormContainer;
