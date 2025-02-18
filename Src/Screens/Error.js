import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AlertNotificationRoot, ALERT_TYPE, Toast, Dialog } from 'react-native-alert-notification';

// Login Screen Component
const Loginscreen = () => {
//   const navigation = useNavigation();
  const [email, setEmail] = useState(); // Initialize with an empty string
  const [password, setPassword] = useState(); // Initialize with an empty string
 // Validation function
 const validate = () => {
    if (!email || !password) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Validation Error',
            textBody: 'Please Fill Required Field.',
        });
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Invalid Email',
            textBody: 'Please enter a valid email address.',
        });
        return false;
    }

    return true;
};

const handleSubmit = () => {
    if (validate()) {
        // Show a success message
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Login Successful',
            textBody: 'You are being redirected...',
        });
       }
};

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <Text style={styles.login}>Log in</Text>

        <Text style={styles.email}>E-mail</Text>
        <CustomInput
          value={email}
          setvalue={setEmail} // Update the email state correctly
          placeholder="Enter your email"
          placeholderTextColor="black"
        />

        <Text style={styles.email}>Password</Text>
        <CustomInput
          value={password}
          setvalue={setPassword} // Update the password state correctly
          placeholder="Enter your password"
          placeholderTextColor="black"
          secureTextEntry={true}
        />

        {/* <TouchableOpacity onPress={() => navigation.navigate('verifyscreen')}> */}
          <Text style={styles.pass}>Forgot password?</Text>
        {/* </TouchableOpacity> */}
        <View style={styles.loginbtn}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signin}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Signupscreen')}> */}
            <Text style={styles.sign}>Sign up for an account</Text>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'azure',
    flex: 1,
    padding: 10,
  },
  login: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
  },
  email: {
    fontSize: 15,
    padding: 10,
    marginTop: 40,
    color: 'black',
  },
  pass: {
    padding: 10,
    textAlign: 'center',
    marginLeft: 200,
    color: 'blue',
  },
  btn: {
    height: 40,
    width: 300,
    backgroundColor: '#ffd243',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 15,
    alignSelf: 'center',
    borderRadius: 10,
  },
  sign: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
  },
  signin: {
    marginTop: 150,
  },
  loginbtn: {
    marginTop: 60,
  },
})