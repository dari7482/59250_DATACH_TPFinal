import { View, Text, FlatList, StyleSheet } from 'react-native'
import cart from '../data/cart.json'
import CartItem from '../components/CartItem'
import Counter from '../components/Counter'
import React from 'react'
import { colors } from '../global/color'

const Cart = () => {
    const { test } = cart.items
    console.log('7test', cart.items)

    return (
        <View style={styles.containerTotal}>
            <Counter />
            <FlatList
                data={cart.items}
                KeyExtractor={item => item.id}
                renderItem={
                    ({ item }) =>

                        <CartItem item={item} />
                }
            />
            <View style={styles.container}>
                <Text>Confirmar</Text>
                <Text>Total:{cart.Total}</Text>


            </View>
        </View>
    )
}

export default Cart
const styles = StyleSheet.create({
    containerTotal: {
        flex: 1
    },
    container: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: colors.green2,
        marginTop: 10,
        padding: 15,
        gap: 10,
        alignItems: "center",
        justifyContent: "space-around"

    },
    containerText: {
        color: "red"


    }






})