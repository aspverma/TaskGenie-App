import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default CustomInput = ({ value, setValue, placeholder, secureTextEntry, maxLength, keyboardType, disabled }) => {


    return (
        <View style={styles.container} >


            <TextInput
                style={styles.input}
                value={value}
                maxLength={maxLength}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholderTextColor={'#969696'}
                disabled={disabled}
            />



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#F7F7F7',
        // borderWidth:1,
        // borderRadius:8,
        // borderColor:'#F7F7F7',
        // paddingHorizontal: 10,
        // // paddingVertical: 5,
        // elevation:5,
        // height:52,
        // justifyContent:'center',

    },
    input: {
        color: '#000',
        borderWidth: 1,
        borderRadius: 8,
        height: hp(7),
        borderWidth: 2,
        paddingLeft: 40,
        borderColor: '#666666',
        position: 'relative',
        marginVertical:10
    }
});