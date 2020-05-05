import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { FormContainer, Button } from "../components";
import { ScrollView } from "react-native-gesture-handler";

import { Picker } from "@react-native-community/picker";

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

const NuevoCliente = () => {
    const [pickerValue, setPickerValue] = React.useState({ valor: "java" });

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
                <Text style={{ ...inputStyles.text, marginTop: 20 }}>
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
                {/* <Picker
                    selectedValue={pickerValue.valor}
                    style={{
                        height: 60,
                        width: "90%",
                        color: "#2ba6ff",
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                        setPickerValue({ valor: itemValue })
                    }
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
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
        height: "85%",
        position: "absolute",
        top: 0,
    },
    botoneraContainer: {
        position: "absolute",
        width: "100%",
        height: "15%",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});
