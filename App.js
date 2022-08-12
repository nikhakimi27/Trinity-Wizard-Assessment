import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, TouchableOpacity} from 'react-native';
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
          name="Screen1"
          component={Screen1}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            title: '',
            headerRight: () => (
              <TouchableOpacity
                // onPress={() => navigation.navigate('Screen1')}
              >
                <Text>Save</Text>
              </TouchableOpacity>
            ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 
