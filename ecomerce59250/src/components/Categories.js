import { View, Text, FlatList } from 'react-native'
import React from 'react'
//import categories from '../data/categories.json'
import Category from './Category.js'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../service/shop'



export default function Categories({ navigation }) {
  //const categories = useSelector(state => state.shop.categories)
  const { data: categories, error, isLoading } = useGetCategoriesQuery()


  return (
    <View>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (

        <Text>Loading</Text>
      ) : categories ? (
        <FlatList
          data={categories}
          keyExtractor={item => item}
          renderItem={({ item }) => { // Destructuramos el objeto para obtener el item directamente o item.item

            return (
              <Category navigation={navigation} item={item} />
            )
          }}

        />) : null}

    </View >
  )
}