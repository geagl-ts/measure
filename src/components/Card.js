import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../components";
import { AntDesign } from "@expo/vector-icons";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "90%",
        height: 250,
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
    text: {
        fontSize: 32,
        color: "#2ba6ff",
        marginHorizontal: 5,
    },
    deleteIcon: {
        position: "absolute",
        top: 15,
        right: 15,
    },
});

const Card = ({ shadow, onDelete, data }) => {
    const phone = data.phones.map((phone) => {
        if (phone.isMain === true) {
            return {
                numero: phone.phone,
            };
        }
    });

    const medida = data.medidas.map((medida) => {
        if (medida.isMain === true) {
            return {
                altura: medida.medida.altura,
                cintura: medida.medida.cintura,
            };
        }
    });

    return (
        <View style={[styles.container, shadow ? styles.shadow : {}]}>
            <Text otherStyles={styles.text} fontWeight="bold">
                {data.name}
            </Text>
            <Text otherStyles={styles.text} fontWeight="semi-bold">
                {phone.map((phone) => {
                    if (phone !== undefined) {
                        return phone.numero;
                    }
                })}
            </Text>
            <Text otherStyles={styles.text} fontWeight="medium">
                Altura{" "}
                {medida.map((medida) => {
                    if (medida !== undefined) {
                        return medida.altura;
                    }
                })}
            </Text>
            <Text otherStyles={styles.text} fontWeight="medium">
                Cintura{" "}
                {medida.map((medida) => {
                    if (medida !== undefined) {
                        return medida.cintura;
                    }
                })}
            </Text>
            <ButtonIcon styles={styles.deleteIcon} onSubmit={onDelete}>
                <AntDesign name="delete" size={34} color="#2ba6ff" />
            </ButtonIcon>
        </View>
    );
};

const ButtonIcon = ({ children, styles, onSubmit }) => {
    return (
        <TouchableOpacity onPress={onSubmit} style={styles} activeOpacity={0.6}>
            {children}
        </TouchableOpacity>
    );
};

export default Card;
