// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {initializeApp} from '@firebase/app';
import '@firebase/auth';

import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

// Initialize Firebase with your credentials
const firebaseConfig = {
  apiKey: 'AIzaSyCCmFwSQASCcwG9FqHttB-WdtHFPhQMvdU',
  authDomain: 'internsh-13824.firebaseapp.com',
  projectId: 'internsh-13824',
  storageBucket: 'internsh-13824.appspot.com',
  messagingSenderId: '835862706653',
  appId: '1:835862706653:web:7a44647e73d02cf5661e34',
  measurementId: 'G-LG07PSPRT8',
};
const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{title: 'Sign Up'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
