import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/color'
import Entypo from '@expo/vector-icons/Entypo';


const CartItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text>{item.brand}</Text>
                <Text>{item.title}</Text>
                <Text>{item.price}$</Text>
            </View>
            <Entypo name="trash" size={24} color="black" />

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: colors.green1,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: "5%",
        borderRadius: 10,
        padding: 15,
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between"

    },
    containerText: {
        color: "red"


    }






})