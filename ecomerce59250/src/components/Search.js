import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/color'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Search = ({ onSearch }) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handleInputChange = (t) => {


        setInput(t)


    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () => {

        const expression = /[^a-zA-Z0-9\s]/
        if (expression.test(input)) {
            setError("caracteres no validos")


        } else {
            setError("")
            onSearch(input)
        }

    }



    return (

        <View >
            <View style={styles.container} >
                <TextInput
                    style={styles.input}
                    placeholder="Buscar productos"
                    placeholderTextColor="#fff"
                    value={input}
                    onChangeText={handleInputChange}
                />
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={24} color="black" />

                </Pressable>
                <Pressable onPress={handleRemoveInput}>
                    <MaterialIcons name="cancel" size={24} color="black" />
                </Pressable>


            </View>
            <View>
                <Text style={styles.error}>
                    {error}
                </Text>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"


    },

    input: {

        backgroundColor: colors.green2,
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        flex: 1,
        width: "75%"

    },
    error: {
        color: "red",
        padding: 2,
        margin: 10,
        fontWeight: "bold"


    }


})