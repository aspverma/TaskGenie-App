import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../Components/CustomHeading'
import CustomInput from '../Components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { AlertNotificationRoot, Toast, ALERT_TYPE } from 'react-native-alert-notification'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const ForgotScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();


  // Validation function
  const validate = () => {


    if (!email) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Validation Error',
        textBody: 'Please Enter Registered Email',
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
    // Perform validation
    if (validate()) {
      // OTP Sent successfully
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'OTP Sent ',
        textBody: 'OTP Sent Successfully on Your Email',
      });
      // Navigate to the Home screen after a delay
      setTimeout(() => {
        navigation.navigate('OTPScreen');
      }, 2000); // 2-second delay to let the user see the success message
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headview}>
            <Image source={require('../Assests/logo.png')} style={styles.logo} />
            <CustomHeading text={'TaskGenie'} style={styles.name} />
          </View>
          <Text style={styles.HeadName}>
            Forget Password
          </Text>
          <Text style={styles.text}>
            Enter your email account to reset your {'\n'} password
          </Text>

          <Image source={require('../Assests/forgot.png')} style={styles.Image} />

          <View style={styles.inputicon}>
            <Image source={require('../Assests/email.png')} style={styles.Icon} />
            <CustomInput placeholder={'Enter Your Email'} value={email} setValue={(text) => setEmail(text)} style={styles.input} />
          </View>


          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.textlogin}>
                Send OTP
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </AlertNotificationRoot>
  )
}

export default ForgotScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    padding: 7,
    flex: 1,
  },
  logo: {
    height: hp(12),
    width: wp(18),
  },
  headview: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  HeadName: {
    alignSelf: 'center',
    fontSize: hp(3),
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: hp(1.6),
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: hp(1.4)
  },
  Image: {
    height: hp(55),
    width: wp(80),
    alignSelf: 'center'

  },
  Icon: {
    height: hp(2.5),
    width: wp(5.2),
    position: 'absolute',
    left: 15,
    top: 26,


  },
  button: {
    height: hp(7),
    backgroundColor: '#316FF6',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: hp(1.5)
  },
  textlogin: {
    textAlign: 'center',
    color: 'azure',
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
})