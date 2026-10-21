// src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação de todas as telas
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpStep1Screen } from '../screens/SignUpStep1Screen';
import { SignUpStep2Screen } from '../screens/SignUpStep2Screen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* A primeira tela da lista é a que abre por padrão */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUpStep1" component={SignUpStep1Screen} />
      <Stack.Screen name="SignUpStep2" component={SignUpStep2Screen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}