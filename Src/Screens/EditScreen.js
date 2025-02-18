import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Toast, AlertNotificationRoot ,Dialog} from 'react-native-alert-notification';


const EditScreen = () => {
    const navigation = useNavigation();

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBrith] = useState('');
    const [email, setEmail] = useState('');

    const validateAndSave = () => {
        // Basic validation checks
        if (!name.trim()) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter your full name.',
            });
            return;
        }
        if (!username.trim()) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter your username.',
            });
            return;
        }
        if (!email.trim() || !validateEmail(email)) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter a valid email address.',
            });
            return;
        }
        if (!number.trim() || !validatePhoneNumber(number)) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter a valid mobile number.',
            });
            return;
        }
        if (!birth.trim()) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter your date of birth.',
            });
            return;
        }

        // If all validations pass, show a success message
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Profile details saved successfully!',
        });

        // Perform the save operation here (e.g., API call)
        // If save is successful, navigate to the SettingScreen
          // Navigate to the SettingScreen after a delay
          setTimeout(() => {
            navigation.navigate('SettingScreen');
        }, 2000); // 2-second delay
    };

    // Email validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Phone number validation function
    const validatePhoneNumber = (number) => {
        const re = /^[0-9]{10}$/; // Example for a 10-digit phone number
        return re.test(number);
    };

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
           
                    <View style={styles.headview}>
                        <TouchableOpacity onPress={() => navigation.navigate('BottomTabBar')}>
                            <Image source={require('../Assests/left.png')} style={styles.logo} />
                        </TouchableOpacity>
                        <Text style={styles.CartText}>Edit Profile</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require('../Assests/user.png')} style={styles.userimg} />

                    <Text style={styles.detailText}>Your Details</Text>

                    <View>
                        <Text style={styles.fullnameText}>Full Name</Text>
                        <CustomInput
                            placeholder={'Enter Full Name'}
                            value={name}
                            setValue={(text) => setName(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>UserName</Text>
                        <CustomInput
                            placeholder={'Enter Your UserName'}
                            value={username}
                            setValue={(text) => setUsername(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>Your Email</Text>
                        <CustomInput
                            placeholder={'Enter Your Email'}
                            value={email}
                            setValue={(text) => setEmail(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>Mobile NO.</Text>
                        <CustomInput
                            placeholder={'Enter Your Number'}
                            value={number}
                            setValue={(text) => setNumber(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>Date OF Birth</Text>
                        <CustomInput
                            placeholder={'Enter Your DOB'}
                            value={birth}
                            setValue={(text) => setBrith(text)}
                            style={styles.input}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={validateAndSave}>
                    <View style={styles.savebox}>
                        <Text style={styles.savetext}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </AlertNotificationRoot>
    );
};

export default EditScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
        padding:7
    },
    userimg: {
        height: hp(10),
        width: wp(20),
        alignSelf: 'center',
        marginVertical:10
    },
    headview: {
        width: wp(97),
        columnGap: hp(14),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginLeft: wp(8),
        marginVertical: hp(2)
        
    },
    CartText: {
        fontSize: hp(2.5),
        fontWeight: '700',
        color:'#316FF6'
    },
    logo: {
        height: hp(3),
        width: wp(4),
    },
    detailText: {
        fontSize: hp(2.5),
        fontWeight: '700',
        marginHorizontal: 10,
        color: '#000',
        marginVertical: 20,
    },
    fullnameText: {
        fontSize: hp(2),
        marginHorizontal: 10,
        color: '#000',
        fontWeight: '600',
    },
    savebox: {
        height: hp(7),
        backgroundColor: '#316FF6',
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
    },
    savetext: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
});
