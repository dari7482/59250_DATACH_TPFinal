import { View, Text } from 'react-native'
import Header from '../components/Header'
import Counter from '../components/Counter'
import Categories from '../components/Categories'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <>
            {/*<Header title="Ecommerce" />*/}
            <Counter />
            <Categories navigation={navigation} />
        </>
    )
}