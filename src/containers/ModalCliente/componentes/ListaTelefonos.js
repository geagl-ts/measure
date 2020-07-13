import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
} from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { BotonIcono } from "../../../components";

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
                        <TouchableOpacity
                            onPress={() => Linking.openURL(`tel:${phone}`)}
                        >
                            <Text style={{ ...styles.cabecera }}>{phone}</Text>
                        </TouchableOpacity>
                        <Text style={{ ...styles.informacion }}>
                            {isMain ? "Nuevo" : "Anterior"}
                        </Text>
                        <View style={{ ...styles.botonera }}>
                            <BotonIcono
                                iconName="edit-3"
                                callback={() =>
                                    fun.actualizarTelefono(props, phone, id)
                                }
                            />
                            <BotonIcono
                                iconName="trash-2"
                                callback={() =>
                                    fun.eliminarTelefono(
                                        eliminarTelefono,
                                        {
                                            telefonoId: id,
                                            clienteId: props.clienteId,
                                        },
                                        props
                                    )
                                }
                            />
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
    botonera: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginBottom: 5,
        borderTopWidth: 1,
        borderTopColor: "#cfcfcf",
    },
});
