import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/color'
import AntDesgin from '@expo/vector-icons/AntDesign';


const OrderItem = ({ item }) => {
    console.log(item)
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
                <Text>{item.Total}$</Text>

            </View>
            <AntDesgin name="search1" size={48} color="black" />

        </View>
    )
}

export default OrderItem

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