import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BLUE_COLOR } from "../../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";

const Informacion = ({ label, valor }) => {
    return (
        <Text style={{ ...styles.cabecera }}>
            {label}: {<Text style={{ ...styles.informacion }}>{valor}</Text>}
        </Text>
    );
};

export default function Lista(props) {
    return (
        <View style={{ ...styles.contenedor }}>
            <ScrollView>
                {props.medidas.map(({ id, height, waist }) => (
                    <View key={id} style={{ ...styles.item }}>
                        <Informacion label="Altura" valor={height} />
                        <Informacion label="Cintura" valor={waist} />
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
        color: "#2a2a2a",
    },
});
