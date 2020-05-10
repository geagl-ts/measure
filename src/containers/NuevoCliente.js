import React, { useState } from "react";
//piker
import { Picker } from "@react-native-community/picker";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { FormContainer, Button } from "../components";
import { ScrollView } from "react-native-gesture-handler";

import { useForm } from "../hooks/";

//getUserData
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_ID = gql`
    query {
        getUser {
            userData {
                id
            }
        }
        getPhoneTypes {
            types {
                id
                type
            }
        }
    }
`;

const Botonera = ({ children }) => (
    <View style={{ ...styles.botoneraContainer }}>{children}</View>
);

const inputStyles = StyleSheet.create({
    container: {},
    text: {
        color: "#2ba6ff",
        fontSize: 23,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginLeft: 20,
    },
    input: {
        color: "#2ba6ff",
        paddingVertical: 4,
        paddingHorizontal: 10,
        fontSize: 22,
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
    onChangeText,
    value,
    warningMessage,
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
                onChangeText={onChangeText}
                value={value}
            />
            {warning ? (
                <Text
                    style={{
                        ...inputStyles.text,
                        ...inputStyles.warning,
                    }}
                >
                    {warningMessage}
                </Text>
            ) : (
                <></>
            )}
        </View>
    );
};

const pickerStyles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    picker: {
        borderWidth: 2,
        width: "88%",
        borderColor: "#aaa",
        marginTop: 2,
        borderRadius: 5,
    },
});

const ContenedorDePickers = ({ children, titulo }) => {
    return (
        <View style={{ ...pickerStyles.container }}>
            {titulo ? (
                <Text style={{ ...inputStyles.text }}>{titulo}</Text>
            ) : (
                <></>
            )}
            <View style={{ ...pickerStyles.picker, marginLeft: 20 }}>
                {children}
            </View>
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

// * componente principal

const validInputs = ({ name, measures, phone }) => {
    if (
        String(name).length === 0 ||
        measures.height === 0 ||
        measures.waist === 0 ||
        String(phone.phone).length === 0
    ) {
        return false;
    } else {
        return true;
    }
};

const NuevoCliente = () => {
    const [phoneType, setPhoneType] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const { loading, data } = useQuery(GET_ID);

    //initial state
    const initialState = {
        name: "",
        user: "",
        measures: {
            height: 0,
            waist: 0,
        },
        phone: {
            phone: "",
            phoneType: "",
        },
    };

    const onSubmit = async (values) => {
        console.log(values);

        if (validInputs(values)) {
            console.log("si");
            if (phoneType.length === 0) {
                values.phone.phoneType = data.getPhoneTypes.types[0].id;
            } else {
                values.phone.phoneType = phoneType;
            }
        } else {
            setShowWarning(true);
            console.log("no");
        }
    };

    //use hook implement
    const { handleSubmit, inputs, subscribe, subscribeSubObject } = useForm(
        initialState,
        onSubmit
    );

    if (loading) {
        return <FormContainer paddingNone={true}></FormContainer>;
    } else {
        const userId = data.getUser.userData.id;

        inputs.user = userId;

        const arrayPhoneTypes = [...data.getPhoneTypes.types];

        return (
            <FormContainer paddingNone={true}>
                <ScrollView style={{ ...styles.scroll }}>
                    <Input
                        titulo="Nombre del cliente:"
                        customStyles={{ marginTop: 20 }}
                        onChangeText={subscribe("name")}
                        value={inputs.name}
                        warning={showWarning && inputs.name.length === 0}
                        warningMessage={"Por favor ingrese el nombre"}
                    />
                    <Input
                        titulo="Telefono:"
                        customStyles={{ marginTop: 20 }}
                        keyboardType="numeric"
                        onChangeText={subscribeSubObject("phone", "phone")}
                        value={inputs.phone.phone}
                        warning={showWarning && inputs.phone.phone.length === 0}
                        warningMessage={"Por favor ingrese el numero"}
                    />
                    <ContenedorDePickers titulo="Tipo de telefono">
                        <Picker
                            selectedValue={phoneType}
                            onValueChange={(itemValue, itemIndex) => {
                                setPhoneType(itemValue);
                            }}
                        >
                            {arrayPhoneTypes.map(({ type, id }) => {
                                return (
                                    <Picker.Item
                                        color="#aaa"
                                        label={type}
                                        value={id}
                                        key={id}
                                    />
                                );
                            })}
                        </Picker>
                    </ContenedorDePickers>
                    <Text style={{ ...inputStyles.text, marginTop: 10 }}>
                        Medidas
                    </Text>
                    <ViewHorizontal>
                        <Input
                            placeholder="Altura"
                            inputCustomStyles={{
                                width: 100,
                                textAlign: "center",
                            }}
                            keyboardType="numeric"
                            onChangeText={subscribeSubObject(
                                "measures",
                                "height"
                            )}
                            value={inputs.measures.height}
                        />
                        <Input
                            placeholder="Cintura"
                            customStyles={{
                                marginHorizontal: -20,
                            }}
                            inputCustomStyles={{
                                width: 100,
                                textAlign: "center",
                            }}
                            keyboardType="numeric"
                            onChangeText={subscribeSubObject(
                                "measures",
                                "waist"
                            )}
                            value={inputs.measures.waist}
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
                        handleSubmit={handleSubmit}
                    />
                </Botonera>
            </FormContainer>
        );
    }
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
