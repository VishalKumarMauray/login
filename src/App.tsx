
import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/Login';
import createAccount from './screens/CreateAccount';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={LoginPage} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name='create account' component={createAccount} options={{
          headerShown:false,
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
