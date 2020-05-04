import React, { cloneElement, Children } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { GlobalStyles as gs } from "./GlobalStyles";

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#f9f9f9",
        width: "90%",
        height: 150,
        borderRadius: 10,
    },
    itemList: {
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        marginHorizontal: 10,
        marginVertical: 4,
    },
});

export const ContentItemList = ({ children, bold }) => (
    <Text
        style={{
            ...gs.text,
            fontSize: 22,
            fontWeight: bold ? "bold" : "normal",
        }}
    >
        {children}
    </Text>
);

export const ContenedorDeListas = ({ children }) => (
    <View
        style={{
            ...styles.list,
        }}
    >
        {children}
    </View>
);

export const List = ({ data, children }) => (
    <ContenedorDeListas>
        <ScrollView>
            {data.map((item) => {
                const childrenConProps = Children.map(children, (child) => {
                    return cloneElement(child, { item });
                });

                return (
                    <View
                        key={item.id}
                        style={{
                            ...styles.itemList,
                        }}
                    >
                        {childrenConProps}
                    </View>
                );
            })}
        </ScrollView>
    </ContenedorDeListas>
);
