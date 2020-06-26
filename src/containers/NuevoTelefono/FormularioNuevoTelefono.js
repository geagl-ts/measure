import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import {
    Boton,
    RadioButtonGroup,
    TituloCampo,
    ContenedorEstandar,
} from "../../components";
import Toast from "../../features/messageInScreen";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import styles, { BLACK_COLOR } from "./styles";

import { NuevoTelefono, TiposDeTelefono } from "./graphql/";

const NUEVO_TELEFONO = gql`
    ${NuevoTelefono}
`;

const TIPOS_DE_TELEFONO = gql`
    ${TiposDeTelefono}
`;

import validationSchema from "./validations";

export default function FormularioNuevoTelefono({ route, navigation }) {
    const [tipo, setTipo] = useState("");
    const { clientid } = route.params;

    const { data, loading, error } = useQuery(TIPOS_DE_TELEFONO);
    const [addPhone] = useMutation(NUEVO_TELEFONO);

    const onSubmit = async (values) => {
        if (tipo.length === 0) {
            Toast("Seleccione un tipo");
        } else {
            const datosOrganizados = {
                phone: values.telefono,
                phoneType: tipo,
                client: clientid,
            };

            const { data: infoNuevoTelefono } = await addPhone({
                variables: datosOrganizados,
            });

            Toast(infoNuevoTelefono.addPhone.message);
            navigation.navigate("HomeNavigator");
        }
    };

    const formik = useFormik({
        initialValues: {
            telefono: "",
        },
        validationSchema,
        onSubmit: onSubmit,
    });

    if (loading) return null;
    if (error) return <>{Toast("Error")}</>;

    return (
        <ContenedorEstandar>
            <TituloCampo label="nuevo telefono" />
            <TextInput
                onChangeText={formik.handleChange("telefono")}
                value={formik.values.telefono}
                placeholder="ingrese el telefono"
                keyboardType="number-pad"
                style={{ ...styles.input, ...styles.setMargin }}
                placeholderTextColor="#7a7a7a"
                onBlur={formik.handleBlur("telefono")}
            />
            {formik.errors.telefono && formik.touched.telefono ? (
                <Text style={{ ...styles.warning }}>
                    {formik.errors.telefono}
                </Text>
            ) : null}
            <TituloCampo label="tipo de telefono" />
            <View style={{ width: "80%", marginVertical: 0 }}>
                <RadioButtonGroup
                    PROP={data.getPhoneTypes.types}
                    selected={setTipo}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Boton
                    tcolor="#ffffff"
                    bg={BLACK_COLOR}
                    onSubmit={formik.handleSubmit}
                    tzise={18}
                    label="Agregar"
                />
            </View>
        </ContenedorEstandar>
    );
}
