import React from "react";
import { About, Home } from "../containers";
import ListaDeClientes from "../containers/ListaDeContactos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const vistas = ["Home", "ListaDeClientes", "About"];

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={vistas[0]}
            screenOptions={screenOptions}
            tabBarOptions={tabBarOPtions}
        >
            <Tab.Screen
                name={vistas[0]}
                component={Home}
                options={{
                    title: "Inicio",
                    ...defaultScreenOptions,
                }}
            />
            <Tab.Screen
                name={vistas[1]}
                component={ListaDeClientes}
                options={{
                    title: "Mensajes",
                    ...defaultScreenOptions,
                }}
            />
            <Tab.Screen
                name={vistas[2]}
                component={About}
                options={{
                    title: "Acerca de",
                    ...defaultScreenOptions,
                }}
            />
        </Tab.Navigator>
    );
};

const tabBarOPtions = {
    activeTintColor: "#2ba6ff",
    inactiveTintColor: "gray",
    labelStyle: {
        fontSize: 17,
        fontWeight: "bold",
    },
    tabStyle: {
        paddingTop: 6,
    },
};

const defaultScreenOptions = {
    unmountOnBlur: true,
};

screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
            case vistas[0]:
                iconName = "md-home";
                break;
            case vistas[1]:
                iconName = "ios-send";
                break;
            case vistas[2]:
                iconName = focused ? "ios-list-box" : "ios-list";
                break;
            default:
                iconName = "ios-cube";
                break;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
});

export default BottomNavigator;
