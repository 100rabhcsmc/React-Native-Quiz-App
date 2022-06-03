import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './navigators/authStackNavigator';
import auth from '@react-native-firebase/auth';
import AppStackNavigator from './navigators/appStackNavigator';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {currentUser ? <AppStackNavigator /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
