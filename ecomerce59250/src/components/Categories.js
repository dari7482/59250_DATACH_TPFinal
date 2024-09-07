import { View, Text, FlatList } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import Category from './Category.js'

console.log(categories)

export default function Categories({ handleCategorySelected }) {
  console.log(typeof (categories))

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({ item }) => { // Destructuramos el objeto para obtener el item directamente o item.item
          console.log('11', item)
          return (
            <Category item={item} handleCategorySelected={handleCategorySelected} />
          )
        }}

      />

    </View >
  )
}