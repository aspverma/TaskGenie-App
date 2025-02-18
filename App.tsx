import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Navigation from './Src/Screens/Navigation'
import SettingScreen from './Src/Screens/SettingScreen'
import  BottomTabBar from './Src/Screens/BottomTabBar'
import LaptopScreen from './Src/Screens/LaptopScreen'
import MobileScreen from './Src/Screens/MobileScreen'
const App = () => {
  return (

    <NavigationContainer>
      <Navigation />
     </NavigationContainer>

    // <HomeScreen />
    // <ProductList/>
    // <SettingScreen/>
    // <CartScreen/>
    // <CarouselScreen/>
    // <SignupScreen/>
    // <EditScreen/>
    // <BottomTabBar/>
    // <SplashScreen/>
    // <MobileScreen/>
    // <LaptopScreen/>

  )
}

export default App

const styles = StyleSheet.create({})


// import React from 'react';
// import { View, Text } from 'react-native';
// import { UserProvider } from './Src/Screens/UseContext';
// import Profile from './Src/Screens/Profile'
// import Error  from './Src/Screens/Error'
// const App = () => {
//     return (
      
//         <UserProvider>
//             <View>
//                 <Text>Welcome to the App!</Text>
//                 <Profile />
//             </View>
//         </UserProvider>
//     );
// };

// export default App;