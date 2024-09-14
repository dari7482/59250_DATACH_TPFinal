import { Pressable, StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../global/color'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({ item }) => {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation()

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("Detail", { id: item.id })}>
            <Text style={[styles.title, width < 300 ? styles.titleMin : styles.titleMax]}>{item.title}</Text>
            <Image style={styles.image}
                resizeMode="cover"
                source={{ uri: item.thumbnail }}


            />
        </Pressable >
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        width: "90%",
        marginHorizontal: "5%",
        gap: 10
    },
    title: {
        width: "70%",
    },
    titleMin: {

        fontSize: 14


    },
    titleMAx: {

        fontSize: 20
    },

    image: {
        width: 64,
        height: 64,
        borderRadius: 3


    }



})