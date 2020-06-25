import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Boton } from "../../components";
import { useFormik } from "formik";

const BLACK_COLOR = "#2a2a2a";

const validate = (values) => {
    const errors = {};

    if (!values.telefono) {
        errors.telefono = "Requerido";
    } else if (values.telefono.length !== 10) {
        errors.telefono = "El campo debe tener 10 caracteres";
    }

    return errors;
};

export default function FormularioNuevoTelefono() {
    const formik = useFormik({
        initialValues: {
            telefono: "",
        },
        validate,
        onSubmit: (x) => console.warn(x),
    });

    return (
        <View style={{ ...styles.mainContainer }}>
            <Text style={{ ...styles.title, ...styles.setMargin }}>
                Nuevo Telefono
            </Text>
            <TextInput
                onChangeText={formik.handleChange("telefono")}
                value={formik.values.telefono}
                placeholder="ingrese el telefono"
                keyboardType="number-pad"
                style={{ ...styles.input, ...styles.setMargin }}
                placeholderTextColor="#7a7a7a"
            />
            {formik.errors.telefono ? (
                <Text>{formik.errors.telefono}</Text>
            ) : null}
            <Boton
                tcolor="#ffffff"
                bg={BLACK_COLOR}
                onSubmit={formik.handleSubmit}
                tzise={18}
            >
                Agregar
            </Boton>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: BLACK_COLOR,
    },
    input: {
        width: "80%",
        height: 50,
        textAlign: "center",
        textAlignVertical: "center",
        color: BLACK_COLOR,
        backgroundColor: "#efefef",
        fontSize: 18,
        borderRadius: 3,
        fontWeight: "bold",
    },
    setMargin: {
        marginBottom: 15,
    },
});
