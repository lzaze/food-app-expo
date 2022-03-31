import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Mail from './screens/Mail';
import Menu from './screens/Menu';
import Cart from './screens/Cart';
import Wallet from './screens/Wallet';

const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Menu' component={Menu}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Mail' component={Mail}/>
            <Stack.Screen name='Wallet' component={Wallet}/>
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
    )
}


export default () => {
    return (
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    )
}
