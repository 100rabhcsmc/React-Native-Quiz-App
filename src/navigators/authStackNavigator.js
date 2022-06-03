import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import SignInScreen from '../screens/signInScreen';
import SignUpScreen from '../screens/signUpScreen';

const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
