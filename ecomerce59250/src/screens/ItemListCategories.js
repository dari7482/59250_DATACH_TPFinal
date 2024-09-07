import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import productos from '../data/productos.json'
import ProductItem from '../components/ProductItem'


export default function ItemListCategories({ category, handleReturnSelect, handleProductDetailId }) {
    const [categoryFiltred, setCategoryFiltred] = useState([])


    useEffect(() => {
        setCategoryFiltred(productos.filter(producto => producto.category === category))

    }, [category])

    const onSearch = (input) => {
        console.log(input)
        console.log(categoryFiltred)
        if (!input) {
            setCategoryFiltred(productos.filter(producto => producto.category === category))
        } else {
            setCategoryFiltred(categoryFiltred.filter(producto => producto.title.includes(input)))
        }
    }
    return (
        <>
            <View>
                <Header title={category} handleReturnSelect={handleReturnSelect} />
                <Search onSearch={onSearch} />
                <FlatList
                    data={categoryFiltred}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem item={item} handleProductDetailId={handleProductDetailId} />}
                />
            </View>
            <Pressable onPress={() => handleReturnSelect("")}>
                <View>
                    <Text>HOME</Text>

                </View>
            </Pressable>
        </>
    )
}