import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CategoryItem from './CategoryItem';
import CarouselScreen from './CarouselScreen';
import BottomTabBar from './BottomTabBar'
const ProductData = [
    {
        key: '1',
        image: require('../Assests/mobiles.png'),
        title: 'IPhone 15',
        Price: '$1000',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '2',
        image: require('../Assests/laptop.png'),
        title: 'Dell i5',
        Price: '$200',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '3',
        image: require('../Assests/headphone.png'),
        title: 'Boat Pro',
        Price: '$10',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '4',
        image: require('../Assests/ledtv.png'),
        title: 'Samsung LED',
        Price: '$70',
        cartimg: require('../Assests/plus.png'),
        ratingimg: require('../Assests/rating.png'),
        liked: true
    },
    {
        key: '5',
        image: require('../Assests/shoes.png'),
        title: 'Nike Shoes',
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
        title: 'Smart Watch',
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

];

// image path of like and unlike
const like = require('../Assests/like.png');
const unlike = require('../Assests/unlike.png');

const HomeScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState(ProductData);
    const [cart, setCart] = useState([]);

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

    // Function to add item to cart
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.key === item.key);
            if (existingItem) {
                // Increase the quantity if the item is already in the cart
                return prevCart.map((cartItem) =>
                    cartItem.key === item.key
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Add the item to the cart with quantity 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Filter the products based on the search query
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ProductItem = ({ item }) => (
        <View style={styles.itemback}>
            <TouchableOpacity onPress={() => toggleLike(item.key)}>
                <Image source={item.liked ? unlike : like} style={styles.likeIcon} />
            </TouchableOpacity>
            <View style={styles.border}>
                <TouchableOpacity onPress={() => navigation.navigate('MobileScreen')}>
                    <Image source={item.image} style={styles.Image} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.Price}</Text>
            </TouchableOpacity>
            <View style={styles.footericon}>
                <Image source={item.ratingimg} style={styles.ratingimg} />
                <TouchableOpacity onPress={() => addToCart(item)}>
                    <Image source={item.cartimg} style={styles.plusicon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.bghead}>
                <View style={styles.Header}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}> */}
                    <Image source={require('../Assests/user.png')} style={styles.icon} />
                    {/* </TouchableOpacity> */}
                    <Text style={styles.heading}>TaskGenie</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CartScreen', { cartItems: cart })}  // Properly pass parameters as a second argument
                    >
                        <Image source={require('../Assests/cart.png')} style={styles.icon} />
                        {cart.length > 0 && (
                            <View style={styles.cartBadge}>
                                <Text style={styles.cartBadgeText}>{cart.length}</Text>
                            </View>
                        )}
                    </TouchableOpacity>

                </View>

                <View style={styles.inputicon}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search Popular Products"
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        placeholderTextColor={'#000'}
                    />
                    <TouchableOpacity>
                        <Image source={require('../Assests/search.png')} style={styles.Icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <CarouselScreen style={styles.carouseledit} />
                <Text style={styles.category}>Category</Text>
                <CategoryItem />

                <Text style={styles.category}>Popular</Text>
                <FlatList
                    numColumns={2}
                    data={filteredItems}
                    renderItem={ProductItem}
                    keyExtractor={(item) => item.key}
                />
            </ScrollView>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: hp(.4),
        alignItems: 'center',
        marginBottom: hp(2),
        columnGap: hp(7),
    },
    icon: {
        height: hp(3.5),
        width: wp(7.5),
        borderRadius: 20,

    },
    bghead: {
        backgroundColor: '#316FF6',
        paddingBottom: 15,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    heading: {
        fontSize: hp(3.7),
        color: 'azure',
        fontWeight: '800',
    },
    Icon: {
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        right: 25,
        bottom: 24
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
        marginTop: hp(.2),
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





})