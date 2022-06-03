import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/theme';
import FormInput from '../components/Shared/FormInput';
import FormButton from '../components/Shared/FormButton';
import {signUp} from '../utils/auth';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = () => {
    if (email != '' && password != '' && confirmPassword != '') {
      if (password == confirmPassword) {
        signUp(email, password);
      } else {
        Alert.alert('password did not match');
      }
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          marginVertical: 34,
          fontWeight: 'bold',
        }}>
        Sign Up
      </Text>
      <FormInput
        labelText="Email"
        placeholderText="Enter Your Email"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />
      <FormInput
        labelText="Password"
        placeholderText="Enter Your Password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <FormInput
        labelText="Confirm Password"
        placeholderText="Enter Your Password again"
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <FormButton
        labelText="Sign Up"
        handleOnPress={handleOnSubmit}
        style={{width: '100%'}}
      />
      {/* Footer */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text>Already have an account?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.primary}}
          onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
