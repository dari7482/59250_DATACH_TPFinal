import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';



const TabBarIcon = ({ text, icon, focused }) => {
    return (
        <View>
            <Entypo name={icon} size={24} color={focused ? "white" : "red"} />
            <Text style={{ color: focused ? "white" : "red" }}>{text}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({})