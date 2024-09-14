import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
//import productos from '../data/productos.json'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { useGetProductosQuery } from '../service/shop'


export default function ItemListCategories({ route }) {
    //const productos = useSelector(state => state.shop.products)
    const { category } = route.params
    const { data: productos, isLoading, isSuccess } = useGetProductosQuery(category)
    const [categoryFiltred, setCategoryFiltred] = useState([])


    useEffect(() => {

        if (isSuccess) {

            setCategoryFiltred(productos)
            //setCategoryFiltred(productos.filter(producto => producto.category === category))
        }

    }, [category, isSuccess])

    const onSearch = (input) => {

        if (input) {
            setCategoryFiltred(categoryFiltred.filter(producto => producto.title.includes(input)))
        } else {
            setCategoryFiltred(productos)
            //setCategoryFiltred(categoryFiltred.filter(producto => producto.title.includes(input)))
        }
    }

    if (isLoading) return <Text>Loading</Text>
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