import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
//import productos from '../data/productos.json'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'


export default function ItemListCategories({ route }) {
    const productos = useSelector(state => state.shop.products)

    const { category } = route.params
    console.log(category)
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
                {/*<Header title={category}/>}*/}
                <Search onSearch={onSearch} />
                <FlatList
                    data={categoryFiltred}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem item={item} />}
                />
            </View>
            <Pressable onPress="">
                <View>
                    <Text>HOME</Text>

                </View>
            </Pressable>
        </>
    )
}