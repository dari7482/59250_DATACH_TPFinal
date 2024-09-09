import { View, Text, FlatList } from 'react-native'
import order from '../data/Orders.json'
import React from 'react'
import OrderItem from '../components/OrderItem'

const Order = () => {
    return (
        <View>
            <FlatList
                data={order}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderItem
                    item={item}

                />}


            />

        </View>
    )
}

export default Order