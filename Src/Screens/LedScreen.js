import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ScrollView, } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

// Get device width and height


const ProductData = [
    {
        key: '1',
        image: require('../Assests/mobiles.png'),
        title: 'Mobiles',
        Price: '$1000',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '2',
        image: require('../Assests/laptop.png'),
        title: 'Laptop',
        Price: '$200',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '3',
        image: require('../Assests/headphone.png'),
        title: 'HeadPhones',
        Price: '$10',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '4',
        image: require('../Assests/ledtv.png'),
        title: 'LED TV',
        Price: '$70',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '5',
        image: require('../Assests/shoes.png'),
        title: 'Shoes',
        Price: '$10',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '6',
        image: require('../Assests/machine.png'),
        title: 'Washing Machine',
        Price: '$30',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '7',
        image: require('../Assests/watch.png'),
        title: 'Watch',
        Price: '$9',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '8',
        image: require('../Assests/books.png'),
        title: 'Books',
        Price: '$2',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },


]

// image path of like unlike
const like = require('../Assests/like.png');
const unlike = require('../Assests/unlike.png');


const MobileScreen = () => {
const navigation=useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState(ProductData);



    // Toggle the like status of an item
    const toggleLike = (itemKey) => {
        const updatedItems = items.map((item) => {
            if (item.key === itemKey) {
                return { ...item, liked: !item.liked };
            }
            return item;
        });
        setItems(updatedItems);
    };


    // Filter the products based on the search query
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const ProductItem = ({ item }) => (
        <View style={styles.itemback}>
            <TouchableOpacity onPress={() => toggleLike(item.key)}>
                <Image
                    source={item.liked ? unlike : like}
                    style={styles.likeIcon}
                />
            </TouchableOpacity>
            <View style={styles.border}>
                <TouchableOpacity>
                    <Image source={item.image} style={styles.Image} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.Price}</Text>
            </TouchableOpacity>
            <View style={styles.footericon}>
                <Image source={item.ratingimg} style={styles.ratingimg} />
                <TouchableOpacity>
                    <Image source={item.cartimg} style={styles.plusicon} />
                </TouchableOpacity>
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Image source={require('../Assests/left.png')} style={styles.logo} />
                </TouchableOpacity> */}
                <Text style={styles.Carttext}>Popular Products</Text>
            </View>
            <ScrollView>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Search Popular Product"
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        placeholderTextColor={'#000'}
                    />
                    <TouchableOpacity>
                        <Image source={require('../Assests/search.png')} style={styles.Icon} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    numColumns={2}
                    data={filteredItems}
                    renderItem={ProductItem}
                    keyExtractor={(item) => item.key}
                />
            </ScrollView>

        </View>
    )
}

export default MobileScreen


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
    },
    headview: {
        width: wp(97),
        // // columnGap: hp(10),
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignSelf: 'center',
        // marginLeft: wp(8),
        marginVertical: hp(2)
    },
    Carttext: {
        fontSize: hp(2.5),
        fontWeight: '700',
        color: '#316FF6',
        textAlign:'center'

    },
    Icon: {
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        right: 25,
        bottom: 24
    },
    logo: {
        height: hp(3),
        width: wp(4),
    },
    input: {
        backgroundColor: 'azure',
        color: '#000',
        margin: 10,
        borderRadius: 25,
        height: hp(6),
        borderWidth: 2,
        paddingLeft: wp(5),
        borderColor: '#666666',
        opacity: 0.5,
        fontWeight: '500'
    },

    category: {
        color: '#333',
        fontWeight: '700',
        paddingLeft: wp(5),
        marginTop: hp(2),
        fontSize: hp(2)
    },
    flatview: {
        display: 'flex',
        flexDirection: 'row'
    },
    itemback: {
        backgroundColor: 'white',
        height: hp(32.5),
        // width: wp(47),
        padding: 9,
        marginVertical: hp(1),
        marginHorizontal: wp(1),
        borderRadius: 8,
        borderRadius: 20,
        marginTop: hp(2),
        flex: 2,

    },
    Image: {
        width: hp(25),
        height: wp(35),
        alignItems: "center",
        alignSelf: 'center'
    },
    title: {
        fontSize: hp(2),
        color: '#333',
        fontWeight: '700',
        marginTop: hp(1),
        // marginVertical:hp(1)
    },
    price: {
        fontSize: hp(2),
        color: '#316FF6',
        fontWeight: '800',
    },
    border: {
        height: hp(18),
        width: wp(37),
        backgroundColor: 'azure',
        borderRadius: 20,
        alignSelf: 'center'
    },
    plusicon: {
        marginLeft: wp(11),
        borderBottomRightRadius: 20,
        height: hp(4),
        width: wp(7.4),
    },
    ratingimg: {
        height: hp(4),
        width: wp(25),
    },
    footericon: {
        flexDirection: 'row',
        columnGap: wp(2)
    },
    likeIcon: {
        height: hp(3),
        width: wp(6),
        alignSelf: 'flex-end'
    },
    cartBadge: {
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: wp(5),
        height: hp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'azure',
        fontSize: hp(2),
        fontWeight: 'bold',
    },


});
