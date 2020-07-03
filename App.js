import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import App from "./src";

// Integracion con graphql
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

// Asignacion del token
import { getToken } from "./token";

const httpLink = new HttpLink({
    uri: "https://measure-app.herokuapp.com/graphql",
});
const authLink = setContext(async (req, { headers }) => {
    const token = await getToken();
    return {
        ...headers,
        headers: {
            authorization: token ? token : "",
        },
    };
});
const link = authLink.concat(httpLink);

// Generacion del cliente
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default () => {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </ApolloProvider>
    );
};
