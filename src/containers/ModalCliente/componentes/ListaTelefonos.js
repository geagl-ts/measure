import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { Feather } from "@expo/vector-icons";

import { BLUE_COLOR } from "../../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import fun from "../funciones";
import { ELIMINAR_TELEFONO } from "../graphql/Mutation";

export default function Lista(props) {
    const [eliminarTelefono] = useMutation(ELIMINAR_TELEFONO);

    return (
        <View style={{ ...styles.contenedor }}>
            <ScrollView>
                {props.telefonos.map(({ id, isMain, phone }) => (
                    <View key={id} style={{ ...styles.item }}>
                        <Text style={{ ...styles.cabecera }}>{phone}</Text>
                        <View style={{ ...styles.eliminar_telefono }}>
                            <Text style={{ ...styles.informacion }}>
                                {isMain ? "Nuevo" : "Anterior"}
                            </Text>
                            <TouchableOpacity
                                onPress={() =>
                                    fun.eliminarTelefono(
                                        eliminarTelefono,
                                        {
                                            telefonoId: id,
                                            clienteId: props.clienteId,
                                        },
                                        props.navigate,
                                        props.modalState
                                    )
                                }
                            >
                                <Feather
                                    name="trash-2"
                                    size={30}
                                    color="#2ba6ff"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "#f9f9f9",
        width: "90%",
        height: 150,
        borderRadius: 10,
    },
    item: {
        marginHorizontal: 20,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cfcfcf",
    },
    cabecera: {
        fontSize: 24,
        color: BLUE_COLOR,
        fontWeight: "bold",
    },
    informacion: {
        fontSize: 20,
        color: BLUE_COLOR,
    },
    eliminar_telefono: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 5,
    },
});
