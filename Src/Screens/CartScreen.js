import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ALERT_TYPE, Toast, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';

const CartScreen = ({ route }) => {
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState(route.params.cartItems);  //route.params.cartItems

    // Increment the quantity of an item
    const incrementQuantity = (itemKey) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.key === itemKey ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrement the quantity of an item
    const decrementQuantity = (itemKey) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.key === itemKey ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0) // Remove item if quantity is zero
        );
    };

    // Remove an item from the cart
    const removeItem = (itemKey) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.key !== itemKey));
    };


    // placed order when click on placed 
    const Placed = () => {
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Order Placed',
            textBody: 'Your Order Is Placed To Your Address ',
        });

        // navigate to another screen after placed the order 
        setTimeout(() => {
            navigation.navigate('BottomTabBar');
        }, 2000); // 2-second delay
    }




    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <View style={styles.productbox}>
                <Image source={item.image} style={styles.cartItemImage} />
            </View>
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>{item.title}</Text>
                <Text style={styles.cartItemPrice}>{item.Price}</Text>
                <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
            </View>
            <View style={styles.quantityControls}>
                <TouchableOpacity onPress={() => decrementQuantity(item.key)} style={styles.controlButton}>
                    <Text style={styles.controlButtonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => incrementQuantity(item.key)} style={styles.controlButton}>
                    <Text style={styles.controlButtonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeItem(item.key)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>

                <View style={styles.headview}>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabBar')}>
                        <Image source={require('../Assests/left.png')} style={styles.logo} />
                    </TouchableOpacity>
                    <Text style={styles.Carttext}>Cart</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <FlatList
                        data={cartItems}
                        renderItem={renderCartItem}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={styles.cartList}
                    />




                </ScrollView>
                <View style={styles.totalBar}>
                    <Text style={styles.totalText}>Total: $</Text>
                    <TouchableOpacity onPress={Placed} >
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
        flex: 1,
        backgroundColor: '#d9d9d9',
        padding:7

    },
    headview: {
        width: wp(97),
        columnGap: hp(18),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginLeft: wp(8),
        marginVertical: hp(2)
    },
    Carttext: {
        fontSize: hp(2.5),
        fontWeight: '700',
        color:'#316FF6',
        textAlign:'center'

    },
    cartItem: {
        borderRadius: hp(2),
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 8,
        justifyContent: 'space-around',
        width: '98%',
        alignSelf: 'center',
    },
    cartItemDetails: {
        justifyContent: 'center',
    },
    cartItemTitle: {
        fontSize: hp(2),
        fontWeight: '600',
        color: '#000',
    },
    cartItemPrice: {
        fontSize: hp(2),
        color: '#316FF6',
        fontWeight: '700',
    },
    cartItemQuantity: {
        fontSize: hp(1.4),
        color: '#666',
        fontWeight: '700',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlButton: {
        backgroundColor: '#316FF6',
        padding: 5,
        borderRadius: hp(1),
        marginHorizontal: 5,
    },
    controlButtonText: {
        color: 'azure',
        fontSize: hp(2),
        fontWeight: 'bold',
        padding: 4
    },
    removeButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: hp(.5),
        marginLeft: 10,
    },
    removeButtonText: {
        color: 'azure',
        fontSize: hp(2),
        fontWeight: 'bold',

    },
    logo: {
        height: hp(3),
        width: wp(4),
    },
    CartText: {
        fontSize: hp(2.5),
        fontWeight: '700',
    },
    productbox: {
        height: hp(10),
        width: wp(15),
        backgroundColor: 'azure',
        borderRadius: 20,
        alignItems: 'center',
    },
    cartItemImage: {
        height: hp(10),
        width: wp(23),
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
