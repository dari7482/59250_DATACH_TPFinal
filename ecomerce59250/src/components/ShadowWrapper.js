import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ShadowWrapper({ style, children }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    shadowColor: "dark",

    elevation: 24,
    shadowOpacity: 1,
    shadowRadius: 2.2
})