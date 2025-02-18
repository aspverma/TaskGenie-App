import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState, useCallback } from 'react';
import CustomHeading from '../Components/CustomHeading';
import CustomInput from '../Components/CustomInput';
import { ALERT_TYPE, Toast, AlertNotificationRoot } from 'react-native-alert-notification';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SignupScreen = () => {
    const navigation = useNavigation();

    // State variables for input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // Toggle checkbox state
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    // Validation function
    const validate = () => {


        if (!name || !email || !password || !confirmPassword) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please Fill Required Field.',
            });
            return false;
        }

        if (password !== confirmPassword) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Password Mismatch',
                textBody: 'Password do not match.',
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

        if (password.length < 6) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Weak Password',
                textBody: 'Password should be at least 6 characters long.',
            });
            return false;
        }

        if (!isChecked) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please agree to the Terms & Policy before signing up.',
            });
            return false;
        }

        return true;
    };
    // Handle form submission
    const handleSubmit = () => {
        // Perform validation
        if (validate()) {
            // Account created successfully
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Account Created',
                textBody: 'Your account has been created successfully.',
            });

            // Navigate to the Home screen after a delay
            setTimeout(() => {
                navigation.navigate('BottomTabBar');
            }, 1000); // 1-second delay to let the user see the success message
        }
    };


    // Reset input fields when the screen is focused
    useFocusEffect(
        useCallback(() => {
            // Reset state variables
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setIsChecked(false);
        }, [])
    );

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
            <StatusBar backgroundColor="#316FF6" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.headview}>
                        <Image source={require('../Assests/logo.png')} style={styles.logo} />
                        <CustomHeading text={'TaskGenie'} style={styles.name} />
                    </View>
                    <Text style={styles.HeadName}>Welcome To TaskGenie</Text>
                    <Text style={styles.text}>
                        SignUp Below And Start Your {'\n'}Journey And Discover New Projects
                    </Text>

                    <Text style={styles.login}>Sign Up</Text>

                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/user.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Your Name'} value={name} setValue={setName} style={styles.input} />
                    </View>

                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/email.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Enter Your Email'} value={email} setValue={setEmail} style={styles.input} />
                    </View>

                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/lock.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Enter Your Password'} value={password} setValue={setPassword} secureTextEntry style={styles.input} />
                    </View>

                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/lock.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Confirm Your Password'} value={confirmPassword} setValue={setConfirmPassword} secureTextEntry style={styles.input} />
                    </View>

                    <View>
                        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
                            <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
                                {isChecked && <Text style={styles.checkmark}>✔️</Text>}
                            </View>
                            <Text style={styles.policytext}>
                                By agreeing to our Terms & {'\n'}Policy, you are entering our App.
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.textlogin}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.account}>
                            Already Have An Account? <Text style={styles.new}>Login Here</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </AlertNotificationRoot>
    );
};

export default SignupScreen;

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
        marginVertical:hp(2)

    },
    login: {
        fontSize: hp(2.5),
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: hp(2),
        marginVertical:hp(2)
    },
    Icon: {
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        left: 15,
        top:26,
    },
    checkmark: {
        fontSize: hp(1.3),
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: hp(4),
        alignSelf: 'center',
        alignItems: 'center',
    },
    checkedCheckbox: {
        backgroundColor: '#fff',
    },
    checkbox: {
        height: hp(2),
        width: wp(4),
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
        
    },
    policytext: {
        color: '#0085ff',
        fontWeight: '500',
        textDecorationLine: 'underline',
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
    account: {
        alignSelf: 'center',
        color: '#000',
        fontWeight: 'bold',
        marginVertical:hp(4)
    },
    new: {
        fontWeight: 'bold',
        color: '#316FF6',
        textDecorationLine: 'underline',
    },
});
