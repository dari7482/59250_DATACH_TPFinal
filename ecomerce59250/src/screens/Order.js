import { View, Text, FlatList } from 'react-native'
//import order from '../data/Orders.json'
import React, { useEffect } from 'react'
import OrderItem from '../components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersByUserQuery } from '../service/shop'

const Order = () => {
    //const { id } = route.parmas
    const localId = useSelector(state => state.auth.localId)

    const { data: order, isLoading, isSuccess } = useGetOrdersByUserQuery(localId)





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