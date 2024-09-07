import { View, Text } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import React from 'react'

export default function Home({ handleCategorySelected }) {
    return (
        <>
            <Header title="Ecommerce" />
            <Categories handleCategorySelected={handleCategorySelected} />
        </>
    )
}