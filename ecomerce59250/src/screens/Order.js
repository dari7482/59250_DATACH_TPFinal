import { View, Text, FlatList } from 'react-native'
//import order from '../data/Orders.json'
import React, { useEffect } from 'react'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../service/shop'

const Order = () => {
    //const { id } = route.parmas
    const { data: order, isLoading, isSuccess } = useGetOrdersQuery("1")





    if (isLoading) return <View><Text>Loading</Text></View>
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