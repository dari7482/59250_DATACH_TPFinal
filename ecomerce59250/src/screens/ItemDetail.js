import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
//import productos from '../data/productos.json'
import { colors } from '../global/color'
import { useDispatch } from 'react-redux'
import { addItemCart } from '../features/cart/cartSlice'
import { useNavigation } from '@react-navigation/native'
import { useGetProductoQuery } from '../service/shop'



export default function ItemDetail({ route }) {

    const { id } = route.params
    const { data: producto, isLoading } = useGetProductoQuery(id)

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handleAddItemCart = () => {
        dispatch(addItemCart({ ...producto, quantity: 1 }))
        navigation.navigate("CartStack")


    }

    if (isLoading) return <View><Text>Loading</Text></View>

    return (
        <>
            <View style={styles.container}>

                {/*<Header title="Detalle" />*/}
                <View>
                    <View style={styles.containerDetails}>
                        <Image
                            style={styles.image}
                            resizeMode='container'
                            source={{ uri: producto.thumbnail }}
                        />
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{producto.title}</Text>
                            <Text style={styles.price}>{producto.price}</Text>
                            <Text style={styles.description}>{producto.description}</Text>
                        </View>
                    </View>
                </View>
                <Pressable styles={styles.button} onPress={

                    handleAddItemCart
                }>
                    <Text style={styles.button}>
                        Comprar
                    </Text>

                </Pressable>
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    containerDetails: {},
    containerText: {
        gap: 20



    },
    title: {
        fontSize: 18,


    },
    description: {
        fontSize: 18,
    },
    price: {
        fontSize: 20,

    },
    image: {
        width: "100%",
        height: 260,
        marginVertical: 10
    },
    button: {
        backgroundColor: colors.green1,
        color: "withe",
        borderRadius: 3,
        padding: 10,
        width: "80%",
        marginHorizontal: "10%",
        alignItems: 'center',
        justifyContent: "center"



    }

})