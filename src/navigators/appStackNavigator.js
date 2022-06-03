import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import CreateQuizScreen from '../screens/createQuizScreen';
import AddQuestionScreen from '../screens/addQuestionScreen';
import PlayQuizzScreen from '../screens/playQuizzScreen';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateQuiz" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestions" component={AddQuestionScreen} />
      <Stack.Screen name="PlayQuiz" component={PlayQuizzScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
