import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'
import CustomHeading from '../Components/CustomHeading'
import { useNavigation } from '@react-navigation/native'
import { ALERT_TYPE, Toast, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const OTPScreen = () => {
    const navigation = useNavigation();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);

    // Function to handle change in OTP inputs
    const handleChange = (text, index) => {
        if (isNaN(text)) return; // Only allow numbers

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Automatically focus on the next input
        if (text !== "" && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    // Function to handle backspace for moving to the previous input
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === "") {
            if (index > 0) {
                inputs.current[index - 1].focus();
            }
        }
    };

    // Function to handle OTP submission
    const handleSubmit = () => {
        const otpValue = otp.join("");

        // Check if all OTP fields are filled
        if (otp.includes(" ") || otpValue.length < 6) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please enter the  OTP.',
            });
            return;
        }

        //OTP Verified Successful
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'OTP Verified Successful',
            textBody: 'Your OTP Is Successfully Verified ',
        });

        // Navigate to the Login screen after a delay
        setTimeout(() => {
            navigation.navigate('ResetScreen');
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
                        Welcome To TaskGenie
                    </Text>
                    <Text style={styles.text}>
                        We have sent a code to abc@gmail.com
                    </Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.input}
                                value={digit}
                                keyboardType="numeric"
                                maxLength={1}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                ref={(ref) => (inputs.current[index] = ref)}
                                placeholder='0'
                                placeholderTextColor={'#969696'}
                            />
                        ))}
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.resend}>
                            Didn't you receive any code? <Text style={styles.new}>Resend Code</Text>
                        </Text>
                    </TouchableOpacity>
                    <Image source={require('../Assests/otp.png')} style={styles.Image} />

                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.textlogin}>
                                Verify OTP
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </AlertNotificationRoot>
    );
}

export default OTPScreen

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
        marginVertical: hp(2)
    },
    input: {
        height: hp(6.5),
        width: wp(10),
        borderWidth: 2,
        borderColor: '#666666',
        textAlign: 'center',
        fontSize: hp(2.4),
        borderRadius: 10,
        color: '#000',
        fontWeight: 'bold',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        height: hp(7),
        backgroundColor: '#316FF6',
        borderRadius: 10,
        justifyContent: 'center'
    },
    textlogin: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    Image: {
        height: hp(55),
        width: wp(80),
        alignSelf: 'center'
    },
    resend: {
        alignSelf: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: hp(1.6),
        marginVertical: hp(2)

    },
    new: {
        fontWeight: 'bold',
        color: '#316FF6',
        textDecorationLine: 'underline',
    },
});
