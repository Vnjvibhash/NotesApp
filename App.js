import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import AddNote from './src/AddNote';
import Header from './src/Header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name='Home'
          options={{
            headerTitle: () => <Header title='Home' />,
            headerStyle: {
              backgroundColor: '#ff9f86',
              height: 64
            }
          }}
        />
        <Stack.Screen
          component={AddNote}
          name='AddNote'
          options={{
            headerTitle: () => <Header title='AddNote' />,
            headerStyle: {
              backgroundColor: '#ff9f86',
              height: 64
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
