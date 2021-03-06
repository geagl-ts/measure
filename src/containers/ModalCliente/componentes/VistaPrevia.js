import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Cargando } from "../../../components";
import { useQuery } from "@apollo/react-hooks";
import { TELEFONO_PRINCIPAL } from "../graphql/Query";

export default function VistaPrevia({ cliente, ...props }) {
    const { data, loading } = useQuery(TELEFONO_PRINCIPAL, {
        variables: { clientId: cliente.id },
    });

    if (loading) return <Cargando />;

    return (
        <>
            <TouchableOpacity activeOpacity={0.5} onPress={props.onSubmit}>
                <Text style={{ ...styles.texto }}>{cliente.name}</Text>
                {data.getMainPhone.phone ? (
                    <Text style={{ ...styles.numero }}>
                        {data.getMainPhone.phone.phone}
                    </Text>
                ) : (
                    <Text style={{ ...styles.numero }}>
                        {cliente.phones.length > 0
                            ? cliente.phones[cliente.phones.length - 1].phone
                            : "Numero no disponible"}
                    </Text>
                )}
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: "#2ba6ff",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 12,
    },
    numero: { color: "#2ba6ff", fontSize: 26, textAlign: "center" },
});
