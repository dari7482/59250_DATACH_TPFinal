import { View, Text, FlatList } from 'react-native'
import React from 'react'
//import categories from '../data/categories.json'
import Category from './Category.js'
import { useSelector } from 'react-redux'



export default function Categories({ navigation }) {
  const categories = useSelector(state => state.shop.categories)
  console.log(categories)

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({ item }) => { // Destructuramos el objeto para obtener el item directamente o item.item
          console.log('11', item)
          return (
            <Category navigation={navigation} item={item} />
          )
        }}

      />

    </View >
  )
}