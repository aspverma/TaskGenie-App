import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomHeading = ({ text, type = 'PRIMARY' }) => {
    return (
        <View>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#316FF6",
        fontSize: 33,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10
    },
    text_TERTIARY: {
        color: '#97999B',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',

    },
    text_SECONDARY: {
        color: '#97999B',
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center'
    }
})
export default CustomHeading