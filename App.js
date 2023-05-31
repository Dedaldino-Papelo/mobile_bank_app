import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/HomeScreen/Home";
import Profile from "./src/screens/ProfileScreen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Inter_400Regular, Inter_500Medium,useFonts } from '@expo-google-fonts/inter';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
