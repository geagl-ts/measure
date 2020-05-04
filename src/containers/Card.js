import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ModalUserData from "./ModalUserData";

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
    deleteIcon: {
        position: "relative",
        left: 0,
        top: 13,
    },
    botonera: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60,
        alignItems: "center",
    },
});

const Card = ({ shadow, onDelete, data }) => {
    return (
        <View style={[styles.container, shadow ? styles.shadow : {}]}>
            <View
                style={[
                    { height: 170 },
                    { justifyContent: "center", alignItems: "center" },
                ]}
            >
                <ModalUserData data={data} />
            </View>
            <View style={styles.botonera}>
                <View
                    style={{
                        width: "90%",
                        borderTopWidth: 1,
                        borderTopColor: "#CFD7C7",
                    }}
                >
                    <ButtonIcon
                        styles={[styles.deleteIcon]}
                        onSubmit={onDelete}
                    >
                        <AntDesign name="delete" size={32} color="#2ba6ff" />
                    </ButtonIcon>
                </View>
            </View>
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
