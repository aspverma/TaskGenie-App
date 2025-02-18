import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomHeading from '../Components/CustomHeading';
import CustomInput from '../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Toast, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Login Successful',
                textBody: 'You are being redirected...',
            });

            // Add a delay of 2 seconds before navigating to the HomeScreen
            setTimeout(() => {
                navigation.navigate('BottomTabBar');
            }, 1500); // 2000 milliseconds = 2 seconds
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
                        Welcome To TaskGenie
                    </Text>
                    <Text style={styles.text}>
                        Login Below To {'\n'} Discover New Products
                    </Text>

                    <Text style={styles.login}>
                        Login
                    </Text>

                    <TouchableOpacity>
                        <View style={styles.googlebox}>
                            <Image source={require('../Assests/apple-logo.png')} style={styles.gPic} />
                            <Text style={styles.gogletxt}>
                                Login with Apple
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.googlebox}>
                            <Image source={require('../Assests/google.png')} style={styles.gPic} />
                            <Text style={styles.gogletxt}>
                                Login with Google
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.emailtext}>
                        Or Continue With Email
                    </Text>

                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/email.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Enter Your Email'} value={email} setValue={(text) => setEmail(text)} style={styles.input} />
                    </View>

                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/lock.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Enter Your Password'} value={password} setValue={(text) => setPassword(text)} style={styles.input} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
                        <Text style={styles.forgot}>
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>

                    {/* Connect the button to handleSubmit */}
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.textlogin}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                        <Text style={styles.account}>
                            Don't Have An Account? <Text style={styles.new}>Create New</Text>
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </AlertNotificationRoot>
    );
};

export default LoginScreen;

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
        marginVertical: hp(1.4)
    },
    gPic: {
        height: hp(2.5),
        width: wp(5.2),
    },
    googlebox: {
        flexDirection: 'row',
        height: hp(7),
        backgroundColor: '#316FF6',
        columnGap: 20,
        // marginTop: 10,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: hp(.8)
    },
    gogletxt: {
        color: 'azure',
        fontSize: hp(2),
        fontWeight: '800',
    },
    login: {
        fontSize: hp(2.5),
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: hp(2),
        marginVertical: hp(2)
    },
    emailtext: {
        fontSize: hp(1.7),
        color: 'black',
        textAlign: 'center',
        marginVertical: hp(3),
        fontWeight: '600',

    },
    icon: {
        height: hp(3),
        width: wp(6),
    },
    forgot: {
        color: 'black',
        fontWeight: '700',
        marginHorizontal: wp(2),
        marginVertical: hp(2)
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
    account: {
        marginVertical: hp(4),
        alignSelf: 'center',
        color: '#000',
        fontWeight: 'bold',
    },
    new: {
        fontWeight: 'bold',
        color: '#316FF6',
        textDecorationLine: 'underline',
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
        top: 26,

    },
});
