import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../Components/CustomHeading'
import CustomInput from '../Components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { ALERT_TYPE, Toast, AlertNotificationRoot } from 'react-native-alert-notification'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ResetScreen = () => {
    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle password reset
    const handleResetPassword = () => {
        // Check if both fields are filled
        if (!password || !confirmPassword) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please Create Your New Password',
            });
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Password Mismatch',
                textBody: 'Passwords do not match. Please try again.',
            });
            return;
        }

        if (password.length < 6) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Your Password is Too Short',
            });
            return;
        }



        // Password reset successful
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Password Reset Successful',
            textBody: 'Your password has been reset successfully.',
        });

        // Navigate to the Login screen after a delay
        setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 2000); // 2-second delay to let the user see the success message
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
                        Reset Your Password
                    </Text>
                    <Text style={styles.text}>
                        The Password Must Be Different Than Before
                    </Text>
                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/lock.png')} style={styles.Icon} />
                        <CustomInput
                            placeholder={'Create New Password'}
                            value={password}
                            setValue={(text) => setPassword(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/lock.png')} style={styles.Icon} />
                        <CustomInput
                            placeholder={'Confirm Password'}
                            value={confirmPassword}
                            setValue={(text) => setConfirmPassword(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                    <Image source={require('../Assests/reset.png')} style={styles.Image} />

                    <TouchableOpacity onPress={handleResetPassword}>
                        <View style={styles.button}>
                            <Text style={styles.textlogin}>
                                Reset Password
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </AlertNotificationRoot>
    )
}

export default ResetScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        padding: 7,
        flex: 1,
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
        marginVertical:hp(2)
    },
    logo: {
        height: hp(12),
        width: wp(18),
    },
    headview: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    Icon: {
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        left: 15,
        top:26,
    },
    button: {
        height: hp(7),
        backgroundColor: '#316FF6',
        borderRadius: 10,
        justifyContent:'center'
    },
    textlogin: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    Image: {
        height: hp(45),
        width: wp(90),
        marginVertical:hp(2),
        alignSelf:'center',
    },
})
