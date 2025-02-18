import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE,Toast,Dialog,AlertNotificationRoot, Root } from 'react-native-alert-notification';

const SettingScreen = ({navigation}) => {
    // const navigation=useNavigation();

    const LogOut =()=>{
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Logging Out',
            textBody: 'You Log Out From App',
        });

          // Navigate to the Loggin Screen after a delay
          setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 2000); // 2-second delay
    };
    
    return (
        <Root>
        <View style={styles.container}>

            <View style={styles.iconbox}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image source={require('../Assests/left.png')} style={styles.IconImg} />
                </TouchableOpacity> */}
                {/* <TouchableOpacity>
                    <Image source={require('../Assests/search.png')} style={styles.IconImg} />
                </TouchableOpacity> */}
            </View>
            <ScrollView>

            <Image source={require('../Assests/user.png')} style={styles.UserImg} />

            <View style={styles.NameText}>
                <Text style={styles.ProfileName}>
                    Amit Verma{'\n'}
                </Text>

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('EditScreen')}>
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/profile.png')} style={styles.iconprofile} />
                    <Text style={styles.cartText}>
                       Update Profile
                    </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity >
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/wallet.png')} style={styles.iconprofile} />
                    <Text style={styles.walletText}>
                        Your Wallete
                    </Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity >
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/lock.png')} style={styles.iconprofile} />
                    <Text style={styles.securityText}>
                        Security Password
                    </Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ImportedScreen')}>
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/cart.png')} style={styles.iconprofile} />
                    <Text style={styles.cartText}>
                        Your Cart
                    </Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity>
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/information.png')} style={styles.iconprofile} />
                    <Text style={styles.aboutText}>
                        About Earth Heart
                    </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('VersionPage')}>
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/version.png')} style={styles.iconprofile} />
                    <Text style={styles.versionText}>
                        Version 13.3.13.9
                    </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/customer-care.png')} style={styles.iconprofile} />
                    <Text style={styles.helpText}>
                        Help & Support
                    </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPage')}>
                <View style={styles.InfoBox}>
                    <Image source={require('../Assests/policy.png')} style={styles.iconprofile} />
                    <Text style={styles.policyText}>
                        Privacy Policy
                    </Text>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('PrivacyPage')}>
                        <Image source={require('../Assests/right-arrow.png')} style={styles.IconImage} />
                    </TouchableOpacity> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={LogOut}>
                        <View style={styles.button}>
                            <Text style={styles.textlogin}>
                                Log Out
                            </Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView>

        </View>
        </Root>

    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        padding: 7,
        backgroundColor: '#d9d9d9',
        flex: 1,
    },
    UserImg: {
        height: hp(13),
        width: wp(25),
        alignSelf: 'center',
        marginTop: hp(8),
    },
    button: {
        height: hp(7),
        backgroundColor: '#316FF6',
        borderRadius: 10,
        justifyContent:'center',
        marginTop:hp(14)

    },
    textlogin: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    IconImg: {
        height: hp(3),
        width: wp(4),
        marginLeft:wp(4),
        marginVertical:hp(2)
    },
    iconbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ProfileName: {
        fontSize: 25,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 10,
        color: 'black'
    },
    AccountSetting: {
        fontSize: 25,
        textAlign: 'left',
    },

    // Settings Boxs 
    InfoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        columnGap: 30,
        marginVertical: hp(1.2),
    },
    IconImage: {
        height: hp(3),
        width: wp(4),
    },
    iconprofile: {
        height: hp(2.3),
        width: wp(5),
    },
    aboutText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
    versionText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
    helpText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
    policyText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
    walletText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
    securityText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
    cartText: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    }

})