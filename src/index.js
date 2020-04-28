import React from "react";
import { Login, About, Home, SignUp, AuthLoading } from "./containers";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomeNavigator" component={BottomNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
