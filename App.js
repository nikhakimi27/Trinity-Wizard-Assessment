import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen1}
          options={{ title: 'Screen1' }}
        />
        <Stack.Screen 
          name="Screen2" 
          component={Screen2}
          options={{ title: 'Screen2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 
