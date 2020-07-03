import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AsyncStorage,
} from "react-native";

export default function BtnCerrarSesion(props) {
    const cerrarSesion = async () => {
        await AsyncStorage.removeItem("Token");
        props.navigation.navigate("AuthLoading");
    };

    return (
        <View style={{ ...styles.container }}>
            <TouchableOpacity
                activeOpacity={0.3}
                style={{ ...styles.link }}
                onPress={cerrarSesion}
            >
                <Text style={{ ...styles.texto_link }}>Cerrar sesion</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "55%",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 25,
    },
    texto_link: {
        fontSize: 23,
        textTransform: "capitalize",
        fontWeight: "bold",
        color: "#2ba6ff",
    },
});
