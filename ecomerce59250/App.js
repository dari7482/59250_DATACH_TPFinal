import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/global/color';
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories'
import ItemDetail from './src/screens/ItemDetail'
import { useState } from 'react';
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'

export default function App() {
  const [fontLoaded] = useFonts(fonts)
  const [productDetailId, setProductDetailId] = useState(null)
  const [categorySelected, setCategorySelected] = useState("")

  if (!fontLoaded) {
    return null


  }

  const handleCategorySelected = (category) => {
    setCategorySelected(category)
  }
  const handleReturnSelect = () => {
    setCategorySelected("")
  }
  const handleProductDetailId = (id) => {
    setProductDetailId(id)
  }

  return (
    <>
      {categorySelected ?
        productDetailId !== null ?
          <ItemDetail id={productDetailId} />
          :
          <ItemListCategories category={categorySelected}
            handleReturnSelect={handleCategorySelected}
            handleProductDetailId={handleProductDetailId} />
        :
        <Home handleCategorySelected={handleCategorySelected} />
      }

      <StatusBar style="light" backgroundColor={colors.green1} />
    </>
  );
}


