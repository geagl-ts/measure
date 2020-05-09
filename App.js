import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import App from "./src";

//apollo integration
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//create new client as outlined in the setup guide
const client = new ApolloClient({
    uri: "https://measure-app.herokuapp.com/graphql",
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
