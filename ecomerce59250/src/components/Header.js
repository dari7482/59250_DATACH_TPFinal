import { StyleSheet, Text, View, Pressable, StatusBar, Platform } from 'react-native'
import React from 'react'
import { colors } from '../global/color'

export default function Header({ title, handleReturnSelect }) {
    console.log(handleReturnSelect)
    return (
        <View style={styles.container}>
            {handleReturnSelect ? (
                <Pressable onPress={() => handleReturnSelect("")}>

                    <Text>{"<"}</Text>

                </Pressable>
            ) : null}
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.green1,
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center"



    },
    text: {
        fontSize: 25,
        fontFamily: 'Josefin'


    }


})

