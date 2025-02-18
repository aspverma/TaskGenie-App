import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE,Toast,AlertNotificationRoot,Dialog } from 'react-native-alert-notification';

const CartScreen = () => {
    const navigation = useNavigation();

    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Mobiles', category: 'Electronics', price: 499.99, count: 0, image: require('../Assests/mobiles.png'), },
        { id: 2, name: 'Led', category: 'Electronics', price: 22.2, count: 0, image: require('../Assests/ledtv.png'), },
        { id: 3, name: 'Watch', category: 'Electronics', price: 30.2, count: 0, image: require('../Assests/watch.png'), },
        { id: 4, name: 'Laptop', category: 'Electronics', price: 500.3, count: 0, image: require('../Assests/laptop.png'), },
        { id: 5, name: 'Shoes', category: 'Sports', price: 200.4, count: 0, image: require('../Assests/shoes.png'), },
    ]);

    // Function to increment the item count
    const incrementCount = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };

    // Function to decrement the item count
    const decrementCount = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
        ));
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2);
    };

    const Placed=()=>{
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Order Placed',
            textBody: 'Your Order Is Placed To Your Address ',
        });

        // navigate to annother screen after placed the order 
        setTimeout(() => {
            navigation.navigate('SettingScreen');
        }, 1000); // 1-second delay
    }

    return (
        <AlertNotificationRoot>
        <View style={styles.container}>
            <View style={styles.headview}>
                <TouchableOpacity onPress={() => navigation.navigate('BottomTabBar')}>
                    <Image source={require('../Assests/left.png')} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.CartText}>Cart</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.product_box}>
                        <View style={styles.productbox}>
                            <Image source={item.image} style={styles.productImg} />
                        </View>
                        <View>
                            <Text style={styles.ProductName}>{item.name}</Text>
                            <Text style={styles.CategoryName}>{item.category}</Text>
                            <Text style={styles.Pricetext}>${item.price.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity onPress={() => incrementCount(item.id)}>
                            <Image source={require('../Assests/count.png')} style={styles.counticon} />
                        </TouchableOpacity>
                        <Text style={styles.CountText}>{item.count}</Text>
                        <TouchableOpacity onPress={() => decrementCount(item.id)}>
                            <Image source={require('../Assests/minus.png')} style={styles.counticon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.removeButton, item.count === 0 && { opacity: 0.5 }]}
                            onPress={() => removeItem(item.id)}>
                            <Text style={styles.removeButtonText}>Remove </Text>
                        </TouchableOpacity>
                    </View>
                ))}

            </ScrollView>
            <View style={styles.totalBar}>
                <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                <TouchableOpacity onPress={Placed}>
                    <Text style={styles.totalText}>
                        Place Order
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
        </AlertNotificationRoot>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
    },
    headview: {
        height: hp(8),
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        columnGap: hp(18),
        backgroundColor: '#316FF6',
        alignItems: 'center',
        borderBottomLeftRadius: hp(2),
        borderBottomRightRadius: hp(2),
        padding: hp(2),
    },
    logo: {
        height: hp(3),
        width: wp(4),
    },
    CartText: {
        fontSize: hp(3),
        fontWeight: '700',
    },
    product_box: {
        flexDirection: 'row',
        height: hp(15),
        width: wp(97),
        marginTop: 20,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderRadius: 10,
        alignItems: 'center',
    },
    productImg: {
        height: hp(10),
        width: wp(23),
    },
    productbox: {
        height: hp(10),
        width: wp(15),
        backgroundColor: 'azure',
        borderRadius: 20,
        alignItems: 'center',
    },
    ProductName: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '700',
    },
    CategoryName: {
        fontSize: hp(1.4),
        color: 'black',
    },
    Pricetext: {
        fontSize: hp(2),
        color: '#316FF6',
        fontWeight: '700',
    },
    counticon: {
        height: hp(3),
        width: wp(6),
    },
    CountText: {
        fontSize: hp(2),
        color: '#000',
        fontWeight: '700',
    },
    removeButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
        borderRadius: 5,
        marginLeft: 10,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: hp(1.8),
        fontWeight: '600',
    },
    totalBar: {
        height: hp(7),
        width: wp(100),
        backgroundColor: '#316FF6',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    totalText: {
        color: '#fff',
        fontSize: hp(2.5),
        fontWeight: '700',
    },
});
