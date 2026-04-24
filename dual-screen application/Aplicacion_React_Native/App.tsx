import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import GreetingScreen from './src/screens/GreetingScreen';

type RootStackParamList = {
  Home: undefined;
  Greeting: {name: string};
};

export type {RootStackParamList};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Greeting" component={GreetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;