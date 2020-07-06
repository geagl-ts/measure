import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BLUE_COLOR } from "../../../constants/colors";
import { Boton } from "../../../components";
import { ScrollView } from "react-native-gesture-handler";

export default function Lista(props) {
    return (
        <View style={{ ...styles.contenedor }}>
            <ScrollView>
                {props.telefonos.map(({ id, isMain, phone }) => (
                    <View key={id} style={{ ...styles.item }}>
                        <Text style={{ ...styles.cabecera }}>{phone}</Text>
                        <Text style={{ ...styles.informacion }}>
                            {isMain ? "Principal" : "activo"}
                        </Text>
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
});
