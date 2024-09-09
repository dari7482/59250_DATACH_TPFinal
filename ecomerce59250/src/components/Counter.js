import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'

import React, { useState } from 'react'
import { colors } from '../global/color'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [input, setInput] = useState(0)



    const handleInput = (t) => {
        setInput(Number(t))


    }


    return (
        <View style={styles.container}>
            <View style={styles.containerCounter}>
                <Pressable onPress={() => dispatch(increment())} style={styles.button}>
                    <Text>+</Text>
                </Pressable >
                <View style={styles.count}>
                    <Text>{count}</Text>
                </View>
                <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
                    <Text>-</Text>
                </Pressable>
            </View>
            <View>
                <TextInput
                    style={{ borderWidth: 1 }}
                    value={input}
                    onChangeText={handleInput}

                />
                <Pressable onPress={() => dispatch(incrementByAmount(input))}>
                    <Text>
                        Agregar
                    </Text>



                </Pressable>


            </View>
        </View>

    )
}

export default Counter

const styles = StyleSheet.create({
    count: {

        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        margin: 10

    },
    container: {
        alignItems: "center",
        margin: "10",
        backgroundColor: colors.green1,
        margin: 5,
        padding: 10




    },
    containerCounter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"






    },
    button: {

        backgroundColor: colors.green1,
        minWidth: 80



    }







})