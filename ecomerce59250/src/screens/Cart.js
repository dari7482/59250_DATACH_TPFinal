import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
//import cart from '../data/cart.json'
import CartItem from '../components/CartItem'
import Counter from '../components/Counter'
import React from 'react'
import { colors } from '../global/color'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../service/shop'
import { clearCart } from '../features/cart/cartSlice'
import { useNavigation } from '@react-navigation/native'


const Cart = ({ navigation }) => {
    const cart = useSelector(state => state.cart)
    const locaId = useSelector(state => state.auth.localId)
    const [trigerrPostOrder] = usePostOrderMutation()
    const dispatch = useDispatch()


    const handleAddOrder = () => {
        const createdAt = new Date().toLocaleString()

        const order = {
            ...cart,
            createdAt
        }

        trigerrPostOrder({ userId: locaId, order: order })
        dispatch(clearCart())
        // navigation.navigate("OrderStack")


    }


    //const { test } = cart.items
    //console.log('7test', cart.items)

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
                <Pressable onPress={handleAddOrder}>
                    <Text>Confirmar</Text>
                </Pressable>
                <Text>Total:{cart.total}</Text>


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