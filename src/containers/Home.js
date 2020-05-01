import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "../components";
import Card from "./Card";

const medidas = require("../../assets/Data/Medidas");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContent: {
        width: "100%",
        alignItems: "center",
        marginTop: 46,
        marginBottom: 10,
    },
    content: {
        backgroundColor: "#fff",
        width: "90%",
        height: "80%",
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 5,
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

const Home = () => {
    const [clientes, setClientes] = useState(medidas.data);

    const onPressLink = () => {
        navigation.navigate("AuthLoading");
    };

    return (
        <LinearGradient
            colors={["#2ba6ff", "#2bffed"]}
            style={styles.container}
        >
            <View style={styles.inputContent}>
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
                />
            </View>
            <View style={[styles.content, styles.shadow]}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.scrollContent}>
                        {clientes.map((cliente) => {
                            return (
                                <View
                                    style={styles.cardContainer}
                                    key={cliente.id}
                                >
                                    <Card
                                        data={cliente}
                                        shadow={true}
                                        onDelete={() => {
                                            alert("Eliminar");
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
};

export default Home;
