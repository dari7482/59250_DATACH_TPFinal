import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import productos from '../data/productos.json'
import { colors } from '../global/color'



export default function ItemDetail({ id }) {
    return (
        <>

            <View style={styles.container}>

                <Header title="Detalle" />
                <View>
                    <View style={styles.containerDetails}>
                        <Image
                            style={styles.image}
                            resizeMode='container'
                            souce={{ uri: productos[id].thumbnail }}
                        />
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{productos[id].title}</Text>
                            <Text style={styles.price}>{productos[id].price}</Text>
                            <Text style={styles.description}>{productos[id].description}</Text>
                        </View>
                    </View>
                </View>
                <Pressable styles={styles.button}>
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