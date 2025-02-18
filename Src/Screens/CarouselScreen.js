import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: viewportWidth } = Dimensions.get('window');

const App = () => {
    const carouselItems = [
        {
            title: 'Item 1',
            image: require('../Assests/carousel1.png'),
        },
        {
            title: 'Item 2',
            image: require('../Assests/carousel2.png'),
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={carouselItems}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                layout="tinder" // or 'stack', 'tinder', etc.
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    item: {
        height: hp(32),
        width:wp(97),
        // justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: wp(155),
        height: hp(32),
    },

});

export default App;
