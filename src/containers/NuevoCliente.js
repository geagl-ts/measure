import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { FormContainer, Button } from "../components";
import { ScrollView } from "react-native-gesture-handler";
import RadioForm from "react-native-simple-radio-button";

const Botonera = ({ children }) => (
    <View style={{ ...styles.botoneraContainer }}>{children}</View>
);

const inputStyles = StyleSheet.create({
    container: {},
    text: {
        color: "#2ba6ff",
        fontSize: 19,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginLeft: 20,
    },
    input: {
        color: "#2ba6ff",
        paddingVertical: 4,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 20,
        borderBottomColor: "#2ba6ff",
        borderBottomWidth: 2,
        backgroundColor: "#f7f7f7",
    },
    warning: { color: "coral", fontSize: 16 },
});

const radioButtonStyles = StyleSheet.create({
    container: { marginLeft: 20, marginTop: 20 },
});

const ContenedorDeRadioButtons = ({ children }) => {
    return <View style={{ ...radioButtonStyles.container }}>{children}</View>;
};

const Input = ({
    titulo,
    placeholder,
    warning,
    customStyles,
    inputCustomStyles,
    keyboardType,
}) => {
    let titulo_modificado = "";

    if (titulo) {
        let titulo_string = String(titulo);

        const dos_puntos = titulo_string.charAt(titulo_string.length - 1);

        if (dos_puntos === ":") {
            titulo_modificado = titulo_string
                .substr(0, titulo_string.length - 1)
                .toLowerCase();
        } else {
            titulo_modificado = titulo_string.toLowerCase();
        }
    }

    return (
        <View style={{ ...inputStyles.container, ...customStyles }}>
            {titulo ? (
                <Text style={{ ...inputStyles.text }}>{titulo}</Text>
            ) : (
                <></>
            )}
            <TextInput
                style={{ ...inputStyles.input, ...inputCustomStyles }}
                placeholder={
                    placeholder
                        ? placeholder.toLowerCase()
                        : titulo_modificado.length > 0
                        ? titulo_modificado
                        : titulo_modificado
                }
                placeholderTextColor="#aaa"
                autoCapitalize="none"
                selectionColor="#2ba6ff"
                keyboardType={keyboardType}
            />
            {warning ? (
                <Text
                    style={{
                        ...inputStyles.text,
                        ...inputStyles.warning,
                    }}
                >
                    Warning
                </Text>
            ) : (
                <></>
            )}
        </View>
    );
};

const viewHorizontal = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
});

const ViewHorizontal = ({ children }) => {
    return <View style={{ ...viewHorizontal.container }}>{children}</View>;
};

var radio_props = [
    { label: "Normal", value: "Normal" },
    { label: "Principal", value: "Principal" },
];

const NuevoCliente = () => {
    const [radioButtomValue, setRadioButtomValue] = React.useState("Normal");

    const onPress = (value) => {
        setRadioButtomValue(value);
    };

    return (
        <FormContainer paddingNone={true}>
            <ScrollView style={{ ...styles.scroll }}>
                <Input
                    titulo="Nombre del cliente:"
                    customStyles={{ marginTop: 20 }}
                />
                <Input
                    titulo="Telefono:"
                    customStyles={{ marginTop: 20 }}
                    keyboardType="numeric"
                />
                <ContenedorDeRadioButtons>
                    <RadioForm
                        radio_props={radio_props}
                        initial={radioButtomValue}
                        formHorizontal={true}
                        onPress={onPress}
                        buttonColor={"#aaa"}
                        labelColor={"#aaa"}
                        labelStyle={{
                            marginRight: 20,
                            fontWeight: "bold",
                            fontSize: 18,
                        }}
                        buttonSize={10}
                        selectedButtonColor={"#2ba6ff"}
                        selectedLabelColor={"#2ba6ff"}
                    />
                </ContenedorDeRadioButtons>
                <Text style={{ ...inputStyles.text, marginTop: 10 }}>
                    Medidas
                </Text>
                <ViewHorizontal>
                    <Input
                        placeholder="Altura"
                        inputCustomStyles={{ width: 100, textAlign: "center" }}
                        keyboardType="numeric"
                    />
                    <Input
                        placeholder="Cintura"
                        customStyles={{
                            marginHorizontal: -20,
                        }}
                        inputCustomStyles={{ width: 100, textAlign: "center" }}
                        keyboardType="numeric"
                    />
                </ViewHorizontal>
            </ScrollView>
            <Botonera>
                <Button
                    title="Agregar"
                    borderRadius={100}
                    bgColor="#2ba6ff"
                    iconName="md-person-add"
                    fontSize={20}
                    shadow={true}
                    margin={0}
                    iconSize={28}
                    letterSpacing={1}
                    elevation={4}
                />
            </Botonera>
        </FormContainer>
    );
};

export default NuevoCliente;

const styles = StyleSheet.create({
    scroll: {
        width: "100%",
        height: "80%",
        position: "absolute",
        top: 0,
    },
    botoneraContainer: {
        position: "absolute",
        width: "100%",
        height: "20%",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});
