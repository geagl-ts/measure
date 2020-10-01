import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    AuthLoading,
    NuevoCliente,
    UpdateClientForm,
    NuevoTelefono,
    LoginRegistro,
    NuevaMedida,
} from "./containers";
import BottomNavigator from "./navigations/BottomNavigator";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="AuthLoading"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="AuthLoading" component={AuthLoading} />
            <Stack.Screen name="LoginRegistro" component={LoginRegistro} />
            <Stack.Screen name="HomeNavigator" component={BottomNavigator} />
            <Stack.Screen name="NuevoCliente" component={NuevoCliente} />
            <Stack.Screen name="FormularioTelefono" component={NuevoTelefono} />
            <Stack.Screen
                name="UpdateClientForm"
                component={UpdateClientForm}
            />
            <Stack.Screen name="NuevaMedidaScreen" component={NuevaMedida} />
        </Stack.Navigator>
    );
};
