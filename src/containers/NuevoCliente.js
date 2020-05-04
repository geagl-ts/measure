import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FormContainer, Input, Button } from "../components";
import { ScrollView } from "react-native-gesture-handler";

const ContenedorDeInput = ({ children }) => (
    <View style={{ ...styles.contenedorDeInput }}>{children}</View>
);

const InputPerzonalizado = ({ titulo, placeholder, width }) => {
    const Titulo = () => {
        if (titulo) {
            return <TituloDelInput>{titulo}</TituloDelInput>;
        } else {
            return <></>;
        }
    };

    return (
        <ContenedorDeInput>
            <Titulo />
            <Input
                placeholder={titulo || placeholder}
                shadow={true}
                borderRadius={30}
                placeholderColor="#c4c4c4"
                width={width}
            />
        </ContenedorDeInput>
    );
};

const TituloDelInput = ({ children }) => (
    <Text style={{ ...styles.tituloDelInput }}>{children}</Text>
);

const Botonera = ({ children }) => (
    <View style={{ ...styles.botoneraContainer }}>{children}</View>
);

const NuevoCliente = () => {
    return (
        <FormContainer paddingNone={true}>
            <ScrollView style={{ ...styles.scroll }}>
                <View
                    style={{
                        alignItems: "center",
                        height: 500,
                    }}
                >
                    <InputPerzonalizado titulo="Nombre de la persona" />
                    <View
                        style={{
                            marginTop: 30,
                        }}
                    >
                        <TituloDelInput>Medidas</TituloDelInput>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <View
                            style={{
                                marginHorizontal: 10,
                            }}
                        >
                            <InputPerzonalizado
                                placeholder="altura"
                                width={130}
                            />
                        </View>
                        <View
                            style={{
                                marginHorizontal: 10,
                            }}
                        >
                            <InputPerzonalizado
                                placeholder="cintura"
                                width={130}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 30,
                        }}
                    >
                        <TituloDelInput>Telefono</TituloDelInput>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <View
                            style={{
                                marginHorizontal: 10,
                            }}
                        >
                            <InputPerzonalizado
                                placeholder="numero"
                                width={190}
                            />
                        </View>
                        <View
                            style={{
                                marginHorizontal: 10,
                            }}
                        >
                            <InputPerzonalizado
                                placeholder="tipo"
                                width={100}
                            />
                        </View>
                    </View>
                </View>
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
    contenedorDeInput: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    tituloDelInput: {
        fontSize: 22,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "#2ba6ff",
    },
});
