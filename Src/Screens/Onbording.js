import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SignupScreen from './SignupScreen';  // Ensure LoginScreen is a registered route
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const slides = [
  {
    key: 1,
    image: require('../Assests/onbording2.png'),
    title: 'Welcome To Our App \n To Enjoy The Time ',
    text: 'Description.\nSay something cool',
  },
  {
    key: 2,
    image: require('../Assests/onbording1.png'),
    title: 'Best Services You Will \n Find in The Market',
    text: 'Other cool stuff',
  },
  {
    key: 3,
    image: require('../Assests/onbording3.png'),
    title: 'Quick Delivery To \n Your Places',
    text: 'I\'m already out of descriptions\nLorem ipsum bla bla bla',
  }
];

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.imgslide}>
          <Image source={item.image} style={styles.images} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    // User finished the introduction. Navigate to the SignUp screen
    setShowRealApp(true);
  };

  return showRealApp ? (
   <SignupScreen/>// Show the signup screen directly if showRealApp is true
  ) : (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  title: {
    fontSize: hp(3),
    color: '#316FF6',
    textAlign: 'center',
    marginTop: hp(8),
    fontWeight: 'bold',
  },
  text: {
    fontSize: hp(2),
    color: '#000',
    textAlign: 'center',
    marginTop: hp(6),
  },
  imgslide: {
    backgroundColor: 'azure',
    height: hp(55),
    width: wp(100),
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    alignSelf:'center',
  },
  images: {
    height: hp(60),
    width: wp(120),
    alignSelf: 'center',
  },
});

export default App;
