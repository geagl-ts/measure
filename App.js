import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import App from "./src";

//apollo integration
//import ApolloClient from "apollo-boost";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "@apollo/react-hooks";

const client = (authorization) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: "https://measure-app.herokuapp.com/graphql",
            headers: {
                authorization,
            },
        }),
        cache: new InMemoryCache(),
    });
};

export default () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem("Token");
            setToken(token);
        };

        getToken();
    }, []);

    return (
        <ApolloProvider client={client(token)}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </ApolloProvider>
    );
};
