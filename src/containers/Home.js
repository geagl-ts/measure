import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "../components";
import Card from "./Card";

//data of graphql
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET_USER = gql`
    query {
        getUser {
            loading
            userData {
                id
                clients {
                    id
                    name
                    measures {
                        id
                        height
                        waist
                    }
                    phones {
                        id
                        phone
                        isMain
                    }
                }
            }
        }
    }
`;

const REMOVE_CLIENT = gql`
    mutation removeClient($clientId: ID!) {
        removeClient(clientId: $clientId) {
            message
            loading
        }
    }
`;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    inputContent: {
        width: "100%",
        alignItems: "center",
        marginTop: 46,
        marginBottom: 10,
        zIndex: 1,
        elevation: 9,
    },
    content: {
        position: "absolute",
        backgroundColor: "#fff",
        width: "90%",
        height: "80%",
        borderRadius: 10,
        paddingVertical: 5,
        bottom: "3.1%",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    scroll: {
        width: "100%",
    },
    scrollContent: {
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginVertical: 10,
    },
});

const botonDeNuevoStyles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 14,
        right: 14,
        zIndex: 1,
    },
    content: {
        backgroundColor: "#2ba6ff",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 60,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#fff",
    },
    text: {
        fontSize: 42,
        fontWeight: "bold",
        color: "white",
    },
});

const BotonDeNuevoCliente = ({ onSubmit }) => {
    return (
        <TouchableOpacity
            style={{
                ...botonDeNuevoStyles.container,
                ...styles.shadow,
                elevation: 9,
            }}
            activeOpacity={0.6}
            onPress={onSubmit}
        >
            <LinearGradient
                colors={["#2bffed", "#2ba6ff"]}
                style={botonDeNuevoStyles.content}
            >
                <Text style={{ ...botonDeNuevoStyles.text }}>+</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

//funcion para filtrar los elementos
function isSearched(searchValue) {
    return function (item) {
        return String(item.name)
            .toLowerCase()
            .includes(String(searchValue).toLowerCase());
    };
}

import PrintMessage from "../features/messageInScreen";

const Home = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState("");

    const { loading, data, refetch } = useQuery(GET_USER);
    const [removeClient] = useMutation(REMOVE_CLIENT);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", async () => {
            refetch();
        });

        return unsubscribe;
    }, [navigation]);
    const onDelete = (id) => {
        Alert.alert("Confirmacion", "Esta seguro?", [
            {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "Confirmar",
                onPress: async () => {
                    const {
                        data: {
                            removeClient: { message },
                        },
                    } = await removeClient({
                        variables: {
                            clientId: id,
                        },
                    });

                    if (
                        message !== "error" ||
                        message !== "No debes estar aqui"
                    ) {
                        refetch();
                    }

                    PrintMessage(message);
                },
            },
        ]);
    };

    if (loading) {
        return (
            <LinearGradient
                colors={["#2ba6ff", "#2bffed"]}
                style={styles.container}
            ></LinearGradient>
        );
    } else {
        if (data !== undefined) {
            const {
                getUser: {
                    userData: { clients },
                },
            } = data;

            return (
                <LinearGradient
                    colors={["#2ba6ff", "#2bffed"]}
                    style={styles.container}
                >
                    <BotonDeNuevoCliente
                        onSubmit={() => {
                            navigation.navigate("NuevoCliente");
                        }}
                    />
                    <View style={styles.inputContent}>
                        {/* input para el filtro */}
                        <Input
                            bgColor="#fff"
                            borderRadius={50}
                            shadow={true}
                            placeholder="nombre"
                            placeholderColor="#cacaca"
                            width="90%"
                            paddingVertical={9}
                            paddingHorizontal={20}
                            color="#2ba6ff"
                            // funciones para los datos del input
                            onChange={(value) => {
                                setSearchValue(value);
                            }}
                            defaultValue={searchValue}
                        />
                    </View>
                    <View style={{ ...styles.content, ...styles.shadow }}>
                        <ScrollView style={styles.scroll}>
                            <View style={styles.scrollContent}>
                                {clients
                                    .filter(isSearched(searchValue))
                                    .map((cliente) => {
                                        return (
                                            <View
                                                style={styles.cardContainer}
                                                key={cliente.id}
                                            >
                                                <Card
                                                    data={cliente}
                                                    shadow={true}
                                                    onDelete={() => {
                                                        onDelete(cliente.id);
                                                    }}
                                                    onUpdate={() => {
                                                        navigation.navigate(
                                                            "UpdateClientForm",
                                                            {
                                                                clientId:
                                                                    cliente.id,
                                                            }
                                                        );
                                                    }}
                                                />
                                            </View>
                                        );
                                    })}
                            </View>
                        </ScrollView>
                    </View>
                </LinearGradient>
            );
        } else {
            return <></>;
        }
    }
};

export default Home;
