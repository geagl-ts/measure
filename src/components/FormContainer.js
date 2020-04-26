import React, { Children, cloneElement } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";

import { useForm } from "../hooks";

const styles = StyleSheet.create({
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
});

const FormContainer = ({ children, initialState, onSubmit }) => {
    const { handleSubmit, subscribe, inputs } = useForm(initialState, onSubmit);

    const childrenWithProps = Children.map(children, (child) => {
        return cloneElement(child, {
            handleSubmit,
            subscribe,
            inputs,
        });
    });

    return (
        <View style={{ backgroundColor: "#2ba6ff" }}>
            <View
                style={{
                    backgroundColor: "#fff",
                    height: "100%",
                    // marginTop: "5.8%",
                }}
            >
                <KeyboardAvoidingView
                    behavior="height"
                    style={{
                        backgroundColor: "#2ba6ff",
                        height: "100%",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            position: "absolute",
                            backgroundColor: "#2ba6ff",
                            height: "30%",
                            width: "100%",
                            top: 0,
                            zIndex: 0,
                        }}
                    ></View>
                    <View
                        style={{
                            position: "absolute",
                            backgroundColor: "#fff",
                            bottom: 0,
                            width: "100%",
                            height: "70%",
                            zIndex: 0,
                        }}
                    ></View>
                    <View
                        style={[
                            {
                                zIndex: 1,
                                height: "80%",
                                width: "85%",
                                backgroundColor: "#fff",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                            },
                            styles.shadow,
                        ]}
                    >
                        {childrenWithProps}
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export default FormContainer;
