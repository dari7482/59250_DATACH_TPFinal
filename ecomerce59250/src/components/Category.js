import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ShadowWrapper from './ShadowWrapper'
import { colors } from '../global/color'

export default function Category({ item, handleCategorySelected }) {
    return (
        <Pressable onPress={() => handleCategorySelected(item)}>
            <ShadowWrapper style={styles.container}>
                <Text style={styles.text}>
                    {item}
                </Text>
            </ShadowWrapper>
        </Pressable>
    )
}


const styles = StyleSheet.create({


    container: {
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor: colors.green2,
        height: 50,
        marginVertical: 10,
        pading: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,


    },
    text: {
        fontSize: 16
    }




})