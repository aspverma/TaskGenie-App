import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SettingScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import MobileScreen from './MobileScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={[styles.TabIcon, { tintColor: focused ? '#316FF6' : '#000' }]}
              source={require('../Assests/homee.png')}
            />
          ),
        }}
      />


      {/* <Tab.Screen
        name="Mobile"
        component={MobileScreen}  // Changed name to avoid duplication
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={[styles.TabIcon, { tintColor: focused ? '#316FF6' : '#000' }]}
              source={require('../Assests/smartphone.png')}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false, 
          tabBarIcon: ({ focused }) => (
            <Image
              style={[styles.TabIcon, { tintColor: focused ? '#316FF6' : '#000' }]}
              source={require('../Assests/market.png')}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={[styles.TabIcon, { tintColor: focused ? '#316FF6' : '#000' }]}
              source={require('../Assests/setting.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TabIcon: {
    height: hp(3.2),
    width: wp(6.7),
  }
});
