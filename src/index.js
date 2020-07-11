import React from "react";
import {
    About,
    Home,
    AuthLoading,
    NuevoCliente,
    UpdateClientForm,
    NuevoTelefono,
    LoginRegistro,
    NuevaMedida,
} from "./containers";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "md-home";
                    } else if (route.name === "About") {
                        iconName = focused ? "ios-list-box" : "ios-list";
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: "#2ba6ff",
                inactiveTintColor: "gray",
                labelStyle: {
                    fontSize: 17,
                    fontWeight: "bold",
                },
                tabStyle: {
                    paddingTop: 6,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Inicio",
                    unmountOnBlur: true,
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{ title: "Acerca de", unmountOnBlur: true }}
            />
        </Tab.Navigator>
    );
};

const StackNavigator = () => {
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

export default StackNavigator;
