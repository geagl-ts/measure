import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import ModalDeUsuario from "./ModalUserData";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "90%",
        height: 230,
        borderRadius: 7,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 7,
    },
    posicionDeIcono: {
        position: "relative",
        left: 0,
        top: 10,
    },
    botonera: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60,
        alignItems: "center",
    },
    contenedorDeBoton: {
        width: "90%",
        borderTopWidth: 1,
        borderTopColor: "#CFD7C7",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mainCardView: {
        justifyContent: "center",
        alignItems: "center",
        height: 170,
    },
});

const ContenedorDeTargeta = ({ children, shadow }) => (
    <View style={[styles.container, shadow ? styles.shadow : {}]}>
        {children}
    </View>
);

const VistaPrincipalDeLaTargeta = ({ children }) => (
    <View
        style={{
            ...styles.mainCardView,
        }}
    >
        {children}
    </View>
);

const BotoneraDeLaTargeta = ({ children }) => (
    <View style={styles.botonera}>
        <View style={styles.contenedorDeBoton}>{children}</View>
    </View>
);

const BotonDeTargeta = ({ children, styles, onSubmit, titulo }) => {
    const TituloDeBoton = () => {
        if (titulo) {
            return (
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#2ba6ff",
                    }}
                >
                    {titulo}
                </Text>
            );
        } else {
            return <></>;
        }
    };

    return (
        <TouchableOpacity
            onPress={onSubmit}
            style={{
                ...styles,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
            }}
            activeOpacity={0.6}
        >
            <TituloDeBoton />
            {children}
        </TouchableOpacity>
    );
};

const Card = ({ shadow, onDelete, data }) => {
    return (
        <ContenedorDeTargeta shadow={shadow}>
            <VistaPrincipalDeLaTargeta>
                <ModalDeUsuario data={data} />
            </VistaPrincipalDeLaTargeta>
            <BotoneraDeLaTargeta>
                <BotonDeTargeta
                    styles={{
                        ...styles.posicionDeIcono,
                    }}
                    onSubmit={onDelete}
                    titulo="Eliminar"
                >
                    <AntDesign name="delete" size={32} color="#2ba6ff" />
                </BotonDeTargeta>
                <BotonDeTargeta
                    styles={{
                        ...styles.posicionDeIcono,
                    }}
                    onSubmit={() => {
                        Alert.alert("Mensaje", "Actualizar");
                    }}
                    titulo="Actualizar"
                >
                    <MaterialIcons name="update" size={33} color="#2ba6ff" />
                </BotonDeTargeta>
            </BotoneraDeLaTargeta>
        </ContenedorDeTargeta>
    );
};

export default Card;
