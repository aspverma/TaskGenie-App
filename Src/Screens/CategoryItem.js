import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image,} from 'react-native'
import React from 'react'



const DATA = [
    {
        key: '1',
        image: require('../Assests/home.png'),
        title: 'Home',
    },
    {
        key: '2',
        image: require('../Assests/electronics.png'),
        title: 'Electronic',
    },
    {
        key: '3',
        image: require('../Assests/mobiles.png'),
        title: 'Mobiles',
    },
    {
        key: '4',
        image: require('../Assests/kichen.png'),
        title: 'Kichen',
    },
    {
        key: '5',
        image: require('../Assests/beauty.png'),
        title: 'Beauty',
    },
    {
        key: '6',
        image: require('../Assests/clothes.png'),
        title: 'Fashion',
    },
    {
        key: '7',
        image: require('../Assests/grocery.png'),
        title: 'Groceries',
    },
    {
        key: '8',
        image: require('../Assests/shoes.png'),
        title: 'Shoes',
    },
    {
        key: '9',
        image: require('../Assests/books.png'),
        title: 'Books',
    },
    {
        key: '10',
        image: require('../Assests/toy.png'),
        title: 'Toys',
    },
];




const Item = ({ item }) => (
    <TouchableOpacity >
        <View style={styles.item}>
            <View style={styles.bgborder}>
                <Image source={item.image} style={styles.itemImage} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    </TouchableOpacity>
);

const CategoryItem = () => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={(item) => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        height: 90,
        width: 70,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    itemImage: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 10,
        color: '#333',
        fontWeight: '700'
    },
    bgborder: {
        height: 60,
        width: 60,
        backgroundColor: 'azure',
        borderRadius: 50,
        // marginBottom:6
    },
})