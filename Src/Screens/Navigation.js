import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'
import ForgotScreen from './ForgotScreen';
import Onbording from './Onbording'
import SignupScreen from './SignupScreen';
import OTPScreen from './OTPScreen';
import ResetScreen from './ResetScreen';
import HomeScreen from './HomeScreen';
import MobileScreen from './MobileScreen';
import SettingScreen from './SettingScreen';
import CartScreen from './CartScreen';
import EditScreen from './EditScreen';
import ImportedScreen from './ImportedScreen';
import BottomTabBar from './BottomTabBar';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (

    <Stack.Navigator>

      <Stack.Screen name="Onbording" component={Onbording}
        options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="OTPScreen" component={OTPScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="ResetScreen" component={ResetScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="MobileScreen" component={MobileScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="SettingScreen" component={SettingScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" component={CartScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="EditScreen" component={EditScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="ImportedScreen" component={ImportedScreen}
        options={{ headerShown: false }} />
         <Stack.Screen name="BottomTabBar" component={BottomTabBar}
        options={{ headerShown: false }} />





    </Stack.Navigator>

  )
}

export default Navigation
