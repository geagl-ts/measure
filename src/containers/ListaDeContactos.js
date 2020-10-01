import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ScrollView,
} from "react-native";
import * as Colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import * as Graphql from "../Graphql";
import * as NameScreens from "../navigations/NameScreens";

const isSearched = (searchValue) => (item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase());

export default function Mensajes({ contactos, navigation, ...rest }) {
    const [values, setValues] = useState({
        nombre: "",
    });
    const { data } = useQuery(Graphql.Query.TRAER_CLIENTES);

    const onChangetext = (field) => (value) => {
        setValues({ ...values, [field]: value });
    };

    const limparInputBuscar = () => {
        setValues({
            ...values,
            nombre: "",
        });
    };

    if (!data) {
        return null;
    }

    const { clients } = data.getUser.userData;

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
                        contactos={clients}
                        navigation={navigation}
                        valorNombre={values.nombre}
                    />
                </>
            </View>
        </View>
    );
}

const BotonBuscar = (props) => {
    return (
        <TextInput
            placeholder="nombre del contacto"
            placeholderTextColor="#eff6fc"
            autoCapitalize={"none"}
            {...props}
        />
    );
};

const BotonCancelarBusqueda = ({ ...rest }) => {
    return (
        <TouchableOpacity {...rest}>
            <AntDesign name="closecircleo" size={24} color="#eff6fc" />
        </TouchableOpacity>
    );
};

const Contactos = ({ contactos, navigation, valorNombre, ...rest }) => {
    return (
        <ScrollView {...rest}>
            {contactos.filter(isSearched(valorNombre)).map((contacto) => {
                return (
                    <Contacto
                        key={contacto.id}
                        nombre={contacto.name}
                        navigation={navigation}
                    />
                );
            })}
        </ScrollView>
    );
};

const Contacto = ({ nombre, navigation, ...rest }) => {
    const onPressButton = () => {
        navigation.navigate(NameScreens.VISTA_MENSAJES, { cliente: nombre });
    };

    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={{ ...styles.contactosView }}>
                <Text style={{ ...styles.contactosText }}>{nombre}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#feffea",
    },
    content: {
        flex: 1,
        marginTop: "5.8%",
    },
    botonBuscar: {
        color: "#eff6fc",
        backgroundColor: Colors.BLUE_COLOR,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: Colors.BLUE_COLOR,
        borderTopWidth: 2,
        borderTopColor: Colors.BLUE_COLOR,
        fontSize: 20,
        fontWeight: "bold",
    },
    cancelarBusqueda: {
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1,
    },
    contactosView: {
        borderBottomWidth: 1,
        borderBottomColor: "#e2e2e2",
        padding: 12,
        marginHorizontal: 10,
    },
    contactosText: {
        color: Colors.BLACK,
        fontSize: 18,
        fontWeight: "bold",
    },
});
