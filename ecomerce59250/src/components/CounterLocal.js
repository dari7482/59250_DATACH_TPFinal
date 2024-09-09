import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'

import React, { useState } from 'react'
import { colors } from '../global/color'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState(0)



    const handleInput = (t) => {
        setInput(Number(t))


    }

    const increment = () => {



        setCount(count + 1)


    }
    const decrement = () => {

        if (count !== 0) {
            setCount(count - 1)
        }



    }

    const incrementByAmount = () => {
        console.log(input)
        setCount(count + input)
        setInput(0)




    }

    return (
        <View style={styles.container}>
            <View style={styles.containerCounter}>
                <Pressable onPress={increment} style={styles.button}>
                    <Text>+</Text>
                </Pressable >
                <View style={styles.count}>
                    <Text>{count}</Text>
                </View>
                <Pressable onPress={decrement} style={styles.button}>
                    <Text>-</Text>
                </Pressable>
            </View>
            <View>
                <TextInput
                    style={{ borderWidth: 1 }}
                    value={input}
                    onChangeText={handleInput}

                />
                <Pressable onPress={incrementByAmount}>
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