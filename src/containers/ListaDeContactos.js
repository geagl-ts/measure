import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from "react-native";
import * as Colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const BotonBuscar = (props) => {
    return (
        <TextInput
            placeholder="nombre del contacto"
            placeholderTextColor={Colors.LIGHT_BLUE_COLOR}
            autoCapitalize={"none"}
            {...props}
        />
    );
};

const BotonCancelarBusqueda = ({ ...rest }) => {
    return (
        <TouchableOpacity {...rest}>
            <AntDesign
                name="closecircleo"
                size={24}
                color={Colors.BLUE_COLOR}
            />
        </TouchableOpacity>
    );
};

const Contactos = ({ contactos, ...rest }) => {
    return (
        <View {...rest}>
            <Text>Clientes</Text>
        </View>
    );
};

export default function Mensajes({ contactos, ...rest }) {
    const [values, setValues] = useState({
        nombre: "",
    });

    const onChangetext = (field) => (value) => {
        setValues({ ...values, [field]: value });
    };

    const limparInputBuscar = () => {
        setValues({
            ...values,
            nombre: "",
        });
    };

    return (
        <View style={{ ...styles.container }}>
            <View style={{ ...styles.content }}>
                <>
                    {values.nombre.length > 0 && (
                        <BotonCancelarBusqueda
                            onPress={limparInputBuscar}
                            style={{ ...styles.cancelarBusqueda }}
                        />
                    )}
                    <BotonBuscar
                        style={{ ...styles.botonBuscar }}
                        onChangeText={onChangetext("nombre")}
                        value={values.nombre}
                    />
                </>
                <>
                    <Contactos
                        style={{ ...styles.vistaClientes }}
                        contactos={contactos}
                    />
                </>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        flex: 1,
        marginTop: "5.8%",
    },
    botonBuscar: {
        color: Colors.BLUE_COLOR,
        backgroundColor: "#fcfcfc",
        padding: 10,
        margin: 14,
        borderWidth: 2,
        borderColor: Colors.BLUE_COLOR,
        borderRadius: 50,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    cancelarBusqueda: {
        position: "absolute",
        top: 28,
        left: 28,
        zIndex: 1,
    },
    vistaClientes: {
        borderWidth: 2,
        borderColor: Colors.BLUE_COLOR,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 18,
        height: "86%",
    },
});
